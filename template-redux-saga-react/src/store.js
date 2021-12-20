import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./redux/reducers/RootReducer";
import RootSaga from "./redux/sagas/RootSagas";

// This is the store
// This is where the state, with its' corresponding data, is stored
// It is the states in the store that is being modified and being sent to the view/render

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
