const axios = require("axios");

// let videogames = []

async function getAllVideogames(currentPage){

    var limit = 15;

    if (currentPage === 1) {

        for (let index = 1; index <= 15; index++) {

            await fetch(`https://api.rawg.io/api/games/${index}?key=49898ccb845e449090e95ea5942b8df9`)
            .then(response => response.json())
            .then(data => {
                videogames.push({ id:data.id , name:data.name  })
                console.log(data.id , data.name)
            })
            .catch(error => console.log(error))
        }

        console.log(videogames)
    }

    for (let index = limit * (currentPage - 1) ; index <= (limit * currentPage); index++) {

        await fetch(`https://api.rawg.io/api/games/${index}?key=49898ccb845e449090e95ea5942b8df9`)
            .then(response => response.json())
            .then(data => {
                videogames.push({ id:data.id , name:data.name  })
                console.log(data.id , data.name)
            })
            .catch(error => console.log(error))

    }

}

// console.log(getAllVideogames(100))

// let undefinedIds = []

// 18
// 19
// 53
// 66
// 68
// 75
// 81
// 83
// 120

// https://api.thedogapi.com/v1/breeds

// database
const { Sequelize, DataTypes } = require("sequelize");

// Create server
const express = require("express");

// routes
const { Router } = require("express");

const router = Router();

// Database Models and Instances
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

const Dogs = sequelize.define(
  "dogs",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Temperaments = sequelize.define(
  "temperaments",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Relationships
Dogs.belongsToMany(Temperaments, { through: "dogs_temperaments" });
Temperaments.belongsToMany(Dogs, { through: "dogs_temperaments" });

// addTemperaments
// addDogs

// IMPORTANT: >>=============================>>

// running.
const app = express();

app.use(express.json());

const port = 3001;





// Get all dogs

router.get("/dogs", async (req, res) => {
  try {
    
    const { data } = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=BEM4VPYma78fkZ5pe0B5NQz7YMDwovXi")
  
    const dogs = await Dogs.findAll();

    const response = [...dogs , ...data ]

    res.json(response).status(200);

  } catch (error) {
    console.log(error.message);
  }
});

router.post("/dogs", async (req, res) => {

  try {

    const { name ,temperaments } = req.body;

    
    const dog = await Dogs.create({ name });

    dog.addTemperaments(temperaments)

    res.json(dog).status(200);

  } catch (error) {
    console.log(error.message);
  }


});

// Get Raza by id
router.get("/dogs/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const dog = await Dogs.findByPk(id);

    res.json(dog).status(200);
  } catch (error) {
    console.log(error.message);
  }
})



// ! listo >>==========>>
router.get("/temperaments", async (req, res) => {
  try {

    const { data } = await axios.get(
      "https://api.thedogapi.com/v1/breeds?api_key=BEM4VPYma78fkZ5pe0B5NQz7YMDwovXi"
    );

    const temperament = await Temperaments.findByPk(124)
    

    if(!temperament){

        for (const element of data) {
            if (element.temperament) {
      
              const clean = element.temperament.split(",");
      
              for (const item of clean) {
                const [temperament , created] = await Temperaments.findOrCreate({
                  where: {
                    name: item.trim(),
                  },
                });
              }
            }
          }

          return res.json("primer peticion").status(200);

    }

    const temperaments = await Temperaments.findAll()

    res.json(temperaments).status(200)
  

  } catch (error) {
    console.log(error.message);
  }
});


app.use(router);


// Main Function
function main() {
  app.listen(port, async () => {
    try {
      await sequelize.authenticate();

      await sequelize.sync();

      console.log("conectado a la base de datos");
      console.log(`Server running on port ${port}`);
    } catch (error) {
      console.log(error.message);
    }
  });
}

main();


function getAllPokemons() {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
}


// console.log(getAllTemperaments())







