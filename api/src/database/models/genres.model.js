const { DataTypes } = require("sequelize");
const sequelize = require("../");

const Genres = sequelize.define(
  "genres",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Genres;
