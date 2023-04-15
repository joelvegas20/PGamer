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
    plataforms: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      // allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
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
