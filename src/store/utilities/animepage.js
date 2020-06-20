import axios from "axios";
const FETCH_ANIME = "FETCH_ANIME";

const fetchAnime = (animeList) => {
  return {
    type: FETCH_ANIME,
    payload: animeList,
  };
};

export const fetchAnimeListThunk = (offset) => (dispatch) => {
  return axios
    .get("https://kitsu.io/api/edge/anime?page[limit]=18&page[offset]=" + offset)
    .then((res) => {
      console.log("Anime thunk ", res.data);
      return res.data;
    })
    .then((animeList) => {
      return dispatch(fetchAnime(animeList));
    })
    .catch((err) => console.log(err));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ANIME:
      console.log("from reducer animeeee", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
