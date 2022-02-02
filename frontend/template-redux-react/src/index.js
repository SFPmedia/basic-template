import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// Store is like a container holding data of an application
// When store responds to an action, its' data gets mutated (The mutation should be followed by a "change" event)
// When user gives input in "view", view then dispatches the "action" to the "store" of the application. View then gets data from the store

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
