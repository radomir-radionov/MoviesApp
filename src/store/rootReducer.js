import filmsSlice from "redux/films/FilmsSlice";
import userSlice from "redux/user/UserSlice";

const rootReducer = {
  films: filmsSlice,
  user: userSlice,
};

export default rootReducer;
