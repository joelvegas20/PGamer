

require("dotenv").config();
const { Router } = require("express");
const { getAllGenres } = require("../controllers/genders.controlles");

const {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  postVideogame,
} = require("../controllers/videogames.controllers");

const router = Router();


// Videogames Routes.
router.get("/videogames",  getAllVideogames);

router.get("/videogames/name", getVideogameByName);

router.get("/videogames/:id", getVideogameById);

router.post("/videogames", postVideogame);

router.get("/genres", getAllGenres);

module.exports = router;
