import { render, screen } from "@testing-library/react";
import * as ReactDOM from "react-dom";
import App from "./App";

test("Renders the React App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
