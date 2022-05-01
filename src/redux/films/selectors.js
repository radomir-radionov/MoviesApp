import { createSelector } from "@reduxjs/toolkit";

const films = (state) => state.films;

export const getFilmsSelector = createSelector(films, (state) => state.films);

export const getSearchTextSelector = createSelector(
  films,
  (state) => state.searchText
);

export const getSearchedFilmsSelector = createSelector(
  films,
  (state) => state.searchedFilms
);

export const getLoadingSelector = createSelector(
  films,
  (state) => state.loading
);

export const getGenresSelector = createSelector(films, (state) => state.genres);

export const getMovieDetailsSelector = createSelector(
  films,
  (state) => state.movieDetails
);

export const getMovieRecommendationsSelector = createSelector(
  films,
  (state) => state.movieRecommendations
);
