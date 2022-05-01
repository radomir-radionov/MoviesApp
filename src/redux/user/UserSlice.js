import { createSlice } from "@reduxjs/toolkit";

const movies = JSON.parse(localStorage.getItem("movies"));

const initialState = {
  moviesInPortfolio: movies ? movies : [],
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addToPortfolio: (state, { payload }) => {
      state.moviesInPortfolio = [...state.moviesInPortfolio, payload];
    },
    deleteFromPortfolio: (state, { payload }) => {
      state.moviesInPortfolio = state.moviesInPortfolio.filter(
        (movie) => movie.id !== payload.id
      );
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
