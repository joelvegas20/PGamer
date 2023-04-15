const axios = require("axios");

// Get All videogames Controller
async function getAllVideogames(req, res) {
  //   TODO:
  //  ! 1- Sacar datos Undefined.
  //  ! 2- Limitar el Paginado.

  const { currentPage } = req.query;

  let videogames = [];

  try {
    if (currentPage === "1") {
      for (let index = 1; index <= 15; index++) {
        const { data } = await axios.get(
          `https://api.rawg.io/api/games/${index}?key=de3902c6dc984560a9e669a6b4faa357`
        );

        videogames.push({
          id: data.id,
          name: data.name,
          genres: data.genres,
          image: data.background_image,
        });
      }

      return res.status(200).json(videogames);
    }

    for (
      let index = 15 * (currentPage - 1) + 1;
      index <= 15 * currentPage + 1;
      index++
    ) {
      await axios(
        `https://api.rawg.io/api/games/${index}?key=de3902c6dc984560a9e669a6b4faa357`
      )
        .then(({ data }) => {
          videogames.push({
            id: data.id,
            name: data.name,
            genres: data.genres,
            image: data.background_image,
          });
        })
        .catch((error) => console.log(error.message));
    }

    return res.status(200).json(videogames);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// Get Videogame by ID Controller
async function getVideogameById(req, res) {
  const { id } = req.params;

  let videogame = {};

  try {
    
    await axios(
      `https://api.rawg.io/api/games/${id}?key=de3902c6dc984560a9e669a6b4faa357`
    )
      .then(({ data }) => {
        console.log(data)
        videogame = {
          id: data.id,
          name: data.name,
          image: data.background_image,
          platforms: data.platforms,
          description: data.description,
          released: data.released,
          rating: data.rating,
          genres: data.genres,
        };
      })
      .catch((error) => console.log(error.message));

    res.status(200).send(videogame);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// Get Videogame by Name , first 15 videogames Controller
function getVideogameByName(req, res) {
  res
    .status(200)
    .send("Get Videogame by Name , first 15 videogames Controller");
}

// Post Videogame Controller
function postVideogame(req, res) {
  res.status(200).send("Post Videogame Controller");
}

// Get All Genres Controller
function getAllGenres(req, res) {
  res.status(200).send("Get All Genres Controller");
}

module.exports = {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  postVideogame,
  getAllGenres,
};
