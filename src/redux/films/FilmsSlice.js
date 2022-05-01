// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
  searchedFilms: [],
  genres: [],
  movieDetails: {},
  movieRecommendations: [],
  searchText: "",
  loading: false,
  error: {
    isError: false,
    textError: "",
  },
};

export const filmsSlice = createSlice({
  name: "FILMS",
  initialState,
  reducers: {
    getFilmsData: () => {},
    setFilmsData: (state, { payload }) => {
      state.films = payload;
    },
    getSeacrchedFilms: () => {},
    setSeacrchedFilms: (state, { payload }) => {
      state.searchedFilms = payload;
    },
    getGenresData: () => {},
    setGenresData: (state, { payload }) => {
      state.genres = payload;
    },
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
    getMovieDetailsData: (state, { id }) => {},
    setMovieDetailsData: (state, { payload }) => {
      state.movieDetails = payload;
    },
    getMovieRecommendationsData: (state, { id }) => {},
    setMovieRecommendationsData: (state, { payload }) => {
      state.movieRecommendations = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error.isError = true;
      state.error.textError = payload;
    },
  },
});

export const filmsActions = filmsSlice.actions;

export default filmsSlice.reducer;
