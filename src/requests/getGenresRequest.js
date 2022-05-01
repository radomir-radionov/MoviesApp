import axios from "axios";
import requestQueryString from "constants/requestQueryString";
import requestsURL from "constants/requestsURL";

export const getGenresRequest = async () => {
  const result = await axios.get(
    requestsURL.GENRES +
      "?" +
      requestQueryString.API_KEY +
      process.env.REACT_APP_API_KEY
  );
  return result.data;
};
