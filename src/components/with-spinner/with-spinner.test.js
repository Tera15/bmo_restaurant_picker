import React from "react";
import { render, unmountComponentAtNode,screen } from "react-dom";
import { act } from "react-dom/test-utils";

import Spinner from "./spinner.component";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without crashing", () => {
  act(() => {
    render(<Spinner />, container);
  });
});