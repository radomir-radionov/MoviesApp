import axios from "axios";
import requestQueryString from "constants/requestQueryString";
import requestsURL from "constants/requestsURL";

export const getSearchedFilmRequest = async (requestParams) => {
  const result = await axios.get(
    requestsURL.SEARCH_FILM +
      "?" +
      requestQueryString.QUERY +
      requestParams +
      "&" +
      requestQueryString.API_KEY +
      process.env.REACT_APP_API_KEY
  );
  return result.data;
};
