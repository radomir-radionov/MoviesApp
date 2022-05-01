import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { getFilmsRequest } from "requests/getFilmsRequest";
import { getGenresRequest } from "requests/getGenresRequest";
import { getMovieDetailsRequest } from "requests/getMovieDetailsRequest";
import { getMovieRecommendationsRequest } from "requests/getMovieRecommendationsRequest";
import { getSearchedFilmRequest } from "requests/getSearchedFilmRequest";
import { filmsActions } from "./FilmsSlice";

import { getSearchTextSelector } from "./selectors";

export function* getFilms() {
  try {
    yield put(filmsActions.setLoading(true));
    const data = yield call(() => getFilmsRequest());
    yield put(filmsActions.setFilmsData(data.results));
    yield put(filmsActions.setLoading(false));
  } catch (e) {
    yield put(
      filmsActions.setError(
        "We're sorry, but there was an error processing your request(getFilmsRequest)!!!"
      )
    );
  }
}

export function* searchFilm() {
  const requestParams = yield select(getSearchTextSelector);
  try {
    yield put(filmsActions.setLoading(true));
    const data = yield call(() => getSearchedFilmRequest(requestParams));
    yield put(filmsActions.setSeacrchedFilms(data.results));
    yield put(filmsActions.setLoading(false));
  } catch (e) {
    yield put(
      filmsActions.setError(
        "We're sorry, but there was an error processing your request(getSearchedFilmRequest)!!!"
      )
    );
  }
}

export function* getGenres() {
  try {
    const data = yield call(() => getGenresRequest());
    yield put(filmsActions.setGenresData(data.genres));
  } catch (e) {
    yield put(
      filmsActions.setError(
        "We're sorry, but there was an error processing your request(getGenresRequest)!!!"
      )
    );
  }
}

export function* getMovieDetails({ payload }) {
  try {
    const data = yield call(() => getMovieDetailsRequest(payload));
    yield put(filmsActions.setMovieDetailsData(data));
  } catch (e) {
    yield put(
      filmsActions.setError(
        "We're sorry, but there was an error processing your request(getMovieDetailsRequest)!!!"
      )
    );
  }
}

export function* getMovieRecommendations({ payload }) {
  try {
    const data = yield call(() => getMovieRecommendationsRequest(payload));
    yield put(filmsActions.setMovieRecommendationsData(data.results));
  } catch (e) {
    yield put(
      filmsActions.setError(
        "We're sorry, but there was an error processing your request(getMovieRecommendationsRequest)!!!"
      )
    );
  }
}

export default function* filmsSaga() {
  yield all([takeLatest(filmsActions.getFilmsData, getFilms)]);
  yield all([takeLatest(filmsActions.getSeacrchedFilms, searchFilm)]);
  yield all([takeLatest(filmsActions.getGenresData, getGenres)]);
  yield all([takeLatest(filmsActions.getMovieDetailsData, getMovieDetails)]);
  yield all([
    takeLatest(
      filmsActions.getMovieRecommendationsData,
      getMovieRecommendations
    ),
  ]);
}
