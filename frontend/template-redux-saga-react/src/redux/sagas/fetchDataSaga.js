import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "../types";
import axios from "axios";
import { fetchDataSuccess } from "../actions";

// Redux saga makes use of generator functions, such as the "asyncFetchRequest" below
// It is the "*"-sign which defines the function as a generator function
// A generator function can pause and resume its' code in different steps, separated by the "yield"-keyword
// Every step consists of the code from the start/last yield to and with the next yield
// More on generator functions here: https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

function* asyncFetchRequest(action) {
  try {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${action.payload}`;
    const response = yield call(() => axios.get(url));
    console.log(action);
    console.log(response.data[0]);
    // Takes the first object in the given array. Simply change the array value of "data[]" to change this.
    yield put(fetchDataSuccess(response.data[0].name));
  } catch (error) {
    console.log(error);
  }
}

// takeEvery (pattern, saga, ...args) spawns a saga on each action dispatched to the Store that matches the pattern (in this case, the "type.SEND_REQUEST")
// Example and further explanation here: https://redux-saga.js.org/docs/api/

export function* watchFetchDataSaga() {
  yield takeEvery(types.SEND_REQUEST, asyncFetchRequest);
}

export default watchFetchDataSaga;
