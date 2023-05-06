const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../");
const Genres = require("./genres.model");

const VideoGames = sequelize.define(
  "video_games",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);


// Relationships.
VideoGames.belongsToMany(Genres , {through: "video_games_genres"});
Genres.belongsToMany(VideoGames , {through: "video_games_genres"});


module.exports = VideoGames;
