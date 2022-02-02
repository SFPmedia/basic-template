import { combineReducers } from "redux";
import fetchDataReducer from "./fetchDataReducer";

// As the app grows more complect, it may be a good idea to split the reducing function into separate functions, each managing independent parts of the state
// The "combineReducers" helper function turns an object whose values are different reducing functions into a single reducing function you can pass to "createStore"
// The resulting reducer calls every child reducer, and gathers their results into a single state object.
// The state produced by "combineReducers()" namespaces the states of each reducer under their keys as passed to "combineReducers()"
//Redux uses a single root reducer function that accepts the current state (and an action) as input and returns a new state.
// Users of Redux may write the root reducer function in many different ways, but a recommended common practice is breaking up the state object into slices and using a separate sub reducer to operate on each slice of the state.

// For more information, go to: https://redux.js.org/api/combinereducers
// Or: https://www.saltycrane.com/blog/2018/04/what-does-redux-combinereducers-do/

const RootReducer = combineReducers({
  fetchDataReducer,
});

export default RootReducer;
