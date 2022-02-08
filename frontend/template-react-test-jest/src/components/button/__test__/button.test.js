// Youtube video (React unit testing with Jest & React-testing-library): youtube.com/watch?v=3e1GHCA3GP0

import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./../button";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("Renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});

it("Renders button correctly", () => {
  const { getByTestId } = render(<Button label="save" />);
  expect(getByTestId("button")).toHaveTextContent("save");
});

it("Matches snapshot 1", () => {
  const tree = renderer.create(<Button label="save" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Matches snapshot 2", () => {
  const tree = renderer.create(<Button label="click me please" />).toJSON();
  expect(tree).toMatchSnapshot();
});
