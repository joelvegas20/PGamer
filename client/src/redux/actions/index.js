import axios from "axios";

// Action Types
export const GET_ALL_VIDEOGAMES = "videogames/getAllVideogames";
export const GET_VIDEOGAME_BY_ID = "videogames/getVideogameById";
export const GET_VIDEOGAMES_BY_NAME = "videogames/getVideogamesByName";
export const GET_GENRES = "videogames/getGenres";
export const POST_VIDEOGAME = "videogames/postVideogame";
export const ORDER = "videogames/order";
export const FILTER = "videogames/filter";
export const FILTER_BY_NAME = "videogames/filterByName";
export const CLEAR_DETAIL_VIDEOGAME = "videogames/clearDetailVideogame";

// Actions
// --------------------------------------------
const URL_BASE = "http://localhost:3001";

// Get All Videogames.
export const getAllVideogames = (currentPage) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL_BASE}/videogames`);

    dispatch({
      type: GET_ALL_VIDEOGAMES,
      payload: data,
    });
  };
};

// Get Videogame by ID.
export const getVideogameById = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL_BASE}/videogames/${id}`);
    dispatch({
      type: GET_VIDEOGAME_BY_ID,
      payload: data,
    });
  };
};

// Filter Videogames by Name.
export const filterVideogamesByName = (name) => {
  return async (dispatch) => {
    dispatch({
      type: FILTER_BY_NAME,
      payload: name,
    });
  };
};

// Get Genres from API.
export const getAllGenres = () => {
  return async (dispatch) => {
    axios.get(`${URL_BASE}/genres`).then((data) => {
      dispatch({ type: GET_GENRES, payload: data.data });
    });
  };
};

// Post Videogame.
export const postVideogame = (videogame) => {
  return async (dispatch) => {
    const { data } = await axios.post(`${URL_BASE}/videogames`, videogame);

    dispatch({
      type: POST_VIDEOGAME,
      payload: data,
    });
  };
};


// Order Videogames.
export const orderVideogames = (type) => {
  return (dispatch) => {
    dispatch({
      type: ORDER,
      payload: type,
    });
  };
};

// Filter Videogames.
export const filterVideogames = (type) => {
  return (dispatch) => {
    dispatch({
      type: FILTER,
      payload: type,
    });
  };
};


// Clear Detail Videogame.
export const clearDetailVideogame = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_DETAIL_VIDEOGAME,
    });
  };
}

