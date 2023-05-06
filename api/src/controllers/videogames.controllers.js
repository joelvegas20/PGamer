const axios = require("axios");
const { Op } = require("sequelize");
const Genres = require("../database/models/genres.model");
const VideoGames = require("../database/models/videogames.model");
const { URL_API, API_KEY } = process.env;

// ! Get All videogames Controller
async function getAllVideogames(req, res) {
  try {
    let url = `${URL_API}/games?key=${API_KEY}`;
    let results = [];

    // Get all videogames from API
    while (url) {
      let response = await axios.get(url);
      results = results.concat(
        response.data.results.map((game) => {
          return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            platforms: game.platforms.map((platform) => platform.platform.name),
            description: game.description,
            released: game.released,
            rating: game.rating,
            genres: game.genres.map((genre) => genre.name),
          };
        })
      );

      url = response.data.next;

      if (results.length >= 200 || !url) {
        break;
      }
    }

    // Get all videogames from database
    const videoGamesDB = await VideoGames.findAll({
      attributes: ["id", "name", "image", "description", "released", "rating"],
      include: [
        {
          model: Genres,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    // Merge videogames from API and database
    results = results.concat(
      videoGamesDB.map((game) => {
        return {
          id: game.id,
          name: game.name,
          image: game.image,
          platforms: game.platforms,
          description: game.description,
          released: game.released,
          rating: game.rating,
          genres: game.genres.map((genre) => genre.name),
        };
      })
    );

    // Response Success
    res.status(200).json(results);
    
  } catch (error) {
    // Response Error
    res.status(500).json({ error: error.message });
  }
}

// ! Get Videogame by ID Controller
async function getVideogameById(req, res) {
  const { id } = req.params;

  try {
    if (/^[a-f\d]{8}-([a-f\d]{4}-){3}[a-f\d]{12}$/i.test(id)) {
      // id is uuid search in database
      const videoGameFound = await VideoGames.findOne({
        where: { id },

        // include genres.
        include: [
          {
            model: Genres,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });

      // If videogame is found in database, return it.
      if (videoGameFound) {
        return res.status(200).json({
          id: videoGameFound.id,
          name: videoGameFound.name,
          description: videoGameFound.description,
          platforms: videoGameFound.platforms,
          image: videoGameFound.image,
          released: videoGameFound.released,
          rating: videoGameFound.rating,
          genres: videoGameFound.genres.map((genre) => genre.name),
        });
      }
    }

    // If video game is not found in database, search by API
    const { data } = await axios(`${URL_API}/games/${id}?key=${API_KEY}`);
    if (data) {
      return res.status(200).json({
        id: data.id,
        name: data.name,
        description: data.description,
        platforms: data.platforms.map((platform) => platform.platform.name),
        image: data.background_image,
        released: data.released,
        rating: data.rating,
        genres: data.genres.map((genre) => genre.name),
      });
    }

    // If no videogame is found in the API or in the database, return a 404 error
    return res.status(404).json({ error: 'Videogame not found' });
  } catch (error) {
    // Response Error
    return res.status(500).json({ error: error.message });
  }
}


// ! Get Videogame by Name.
async function getVideogameByName(req, res) {
  const { name } = req.query;
  let url = `${URL_API}/games?search=${name}&key=${API_KEY}`;
  let results = [];

  try {
    // Search in database
    const videoGameFound = await VideoGames.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },

      // include genres.
      include: [
        {
          model: Genres,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
    });

    // Search in API.
    while (url) {
      // Get data from API.
      let response = await axios.get(url);

      // Map data from API and push to results.
      results = results.concat(
        response.data.results.map((game) => {
          return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            platforms: game.platforms?.map(
              (platform) => platform.platform.name
            ),
            description: game.description,
            released: game.released,
            rating: game.rating,
            genres: game.genres?.map((genre) => genre.name),
          };
        })
      );

      // Get ( next ) url to next loop
      url = response.data.next;

      // Break loop if results.length >= 200 or url is false.
      if (results.length >= 200 || !url) {
        break;
      }
    }

    // Response Success
    res.status(200).json(results.concat(videoGameFound));
  } catch (error) {
    // Response Error
    res.status(500).json({ error: error.message });
  }
}

// ! Post Videogame Controller
async function postVideogame(req, res) {
  // Extract Data from Body.
  const { name, description, released, rating, image, platforms, genres } =
    req.body;

  try {
    // Search if the videogame already exists.
    const [videogame, created] = await VideoGames.findOrCreate({
      where: {
        name,
        description,
        released,
        rating,
        image,
        platforms,
      },
    });

    // Add Genres to VideoGame.
    await videogame.addGenres(genres);

    // Response Success
    res.status(201).json(videogame)
  } catch (error) {
    // Response Error
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  postVideogame,
};
