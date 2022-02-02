import { all } from "redux-saga/effects";
import watchFetchDataSaga from "./fetchDataSaga";

// the "RootSaga" generator function uses the "all"-keyword, is basically works like a "Promise all" function
// It instructs the middleware to run multiple Effects in parallel and wait for all of them to complete.

export default function* RootSaga() {
  yield all([watchFetchDataSaga()]);
}
