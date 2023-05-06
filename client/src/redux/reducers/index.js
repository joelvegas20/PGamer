import {

  CLEAR_DETAIL_VIDEOGAME,
  FILTER,
  FILTER_BY_NAME,
  GET_ALL_VIDEOGAMES,
  GET_GENRES,
  GET_VIDEOGAME_BY_ID,
  ORDER,
  POST_VIDEOGAME,

} from "../actions";

const initialState = {

  genres: [],
  detailVideoGame: {},
  videoGames: [],
  filteredVideoGames: [],

};


const rootReducer = (state = initialState, action) => {


  switch (action.type) {

    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videoGames: action.payload,
        filteredVideoGames: [...state.videoGames, ...action.payload],
      };

    case GET_VIDEOGAME_BY_ID:
      return {
        ...state,
        detailVideoGame: action.payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
        videoGames: [...state.videoGames, action.payload],
      };

    case CLEAR_DETAIL_VIDEOGAME:
      return {
        ...state,
        detailVideoGame: {},
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,

      };

    case FILTER:
      if (action.payload === "all") {
        return {
          ...state,
          filteredVideoGames: [...state.videoGames],
        };
      } else if (action.payload === "api") {
        return {
          ...state,
          filteredVideoGames: [
            ...state.videoGames.filter((videoGame) => {
              return videoGame.id.toString().length < 6;
            }),
          ],
        };
      } else if (action.payload === "created") {
        return {
          ...state,
          filteredVideoGames: [
            ...state.videoGames.filter((videoGame) => {
              return videoGame.id.length > 6;
            }),
          ],
        };
      } else {
        return {
          ...state,
          filteredVideoGames: [
            ...state.videoGames.filter((videoGame) => {
              return videoGame.genres.includes(action.payload);
            }),
          ],
        };
      }

    case FILTER_BY_NAME:
      return {
        ...state,
        filteredVideoGames: [
          ...state.videoGames.filter((videoGame) => {
            return videoGame.name
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }),
        ],
      };

    case ORDER:
      return {
        ...state,
        filteredVideoGames: [
          ...state.filteredVideoGames.sort((a, b) => {
            if (action.payload === "asc") {
              return a.name > b.name ? 1 : -1;
            } else if (action.payload === "desc") {
              return a.name < b.name ? 1 : -1;
            } else if (action.payload === "rating") {
              return a.rating < b.rating ? 1 : -1;
            }
          }),
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
