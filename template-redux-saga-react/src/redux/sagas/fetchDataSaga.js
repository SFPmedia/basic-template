import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "../types";
import axios from "axios";
import { fetchDataSuccess } from "../actions";

function* asyncFetchRequest(action) {
  try {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${action.payload}`;
    const response = yield call(() => axios.get(url));
    console.log(action);
    console.log(response.data[0]);
    yield put(fetchDataSuccess(response.data[0].name));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchDataSaga() {
  yield takeEvery(types.SEND_REQUEST, asyncFetchRequest);
}

export default watchFetchDataSaga;
