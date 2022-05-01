import { createSelector } from "@reduxjs/toolkit";

const user = (state) => state.user;

export const getMoviesInPortfolioSelector = createSelector(
  user,
  (state) => state.moviesInPortfolio
);
