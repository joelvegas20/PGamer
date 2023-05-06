require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DIALECT, DEBUG } = process.env;

if (DEBUG === "true") {
  
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false,
  });
  
  module.exports = sequelize;

} else {

  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DIALECT,
    // ! Connecting with CloudDatabase
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
    logging: false,
  });  

  module.exports = sequelize;
}

