import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// The data presented in the view is stored in the Store
// Thunk empowers action creators to decide when and what action to dispatch (great for async actions)
// For complex applications, it is advisable to build a separate layer to manage the asynchronous operations
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  // Provider gives access to the store for the heirarchy below (<App />)
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
