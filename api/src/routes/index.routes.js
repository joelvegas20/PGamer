const { Router } = require("express");
const {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  postVideogame,
  getAllGenres,
} = require("../controllers/videogames.controllers");

const router = Router();

// Principal Route
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Videogames Routes.
router.get("/videogames", getAllVideogames);

router.get("/videogames/name", getVideogameByName);

router.get("/videogames/:id", getVideogameById);

router.post("/videogames", postVideogame);

router.get("/genres", getAllGenres);

module.exports = router;
