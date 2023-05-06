const { default: axios } = require("axios");
const { Sequelize } = require("sequelize");
const Genres = require("../database/models/genres.model");
const { URL_API , API_KEY } = process.env;
const Op = Sequelize.Op;

// ! Get all genres.
async function getAllGenres(req, res) {
  try {
    // Get all genres from API.
    const { data } = await axios.get(
      `${URL_API}/genres?key=${API_KEY}`
    );

    // Filter some fields.
    const genres = data.results.map((element) => ({
      id: element.id,
      name: element.name,
    }));

    // Check if the genres exists in the database.
    Genres.findAll({
      where: {
        name: {
          [Op.in]: genres.map((genre) => genre.name),
        },
      },
    }).then((foundGenres) => {

      foundGenres.length > 0
      // If exists in Database, send the foundGenres.
        ? res.status(200).send(foundGenres)
      // Else, create the genres and send them.
        : (Genres.bulkCreate(genres), res.status(200).send(genres));
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllGenres,
};
