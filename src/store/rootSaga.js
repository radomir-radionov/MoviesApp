import { all, fork } from "redux-saga/effects";
import filmsSaga from "redux/films/saga";

export default function* rootSaga() {
  yield all([fork(filmsSaga)]);
}
