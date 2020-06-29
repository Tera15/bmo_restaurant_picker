import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import InputField from "./input-field.component";

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

it("renders with or without a name", () => {
  act(() => {
    render(<InputField />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<InputField name="Address" />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<InputField name="Ciy" />, container);
  });
  expect(container.textContent).toBe("");
});