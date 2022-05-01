import axios from "axios";
import requestQueryString from "constants/requestQueryString";
import requestsURL from "constants/requestsURL";

export const getMovieDetailsRequest = async (id) => {
  const result = await axios.get(
    requestsURL.MOVIE_DETAILS +
      id +
      "?" +
      requestQueryString.API_KEY +
      process.env.REACT_APP_API_KEY
  );
  return result.data;
};
