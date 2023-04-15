const server = require("./app");
const sequelize = require("../database");
const Videogames = require("../database/models/videogames.model");
const Genres = require("../database/models/genres.model");

function main() {
  
  server.listen(3001, async () => {
    try {

      await sequelize.sync();

    } catch (error) {
      console.log(error.message);
    }

    console.log("Listening in port 3001");
  });

}

main();
