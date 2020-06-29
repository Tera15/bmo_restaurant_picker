import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import RestaurantCard from "./restaurant-card.component";

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

it("renders with all props", () => {
  act(() => {
    render(<RestaurantCard address='12 14 toronto way'/>, container);
  });
  expect(container.textContent).toBe("12 14 toronto way");

  act(() => {
    render(<RestaurantCard name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Jenny");

  act(() => {
    render(<RestaurantCard name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Margaret");
});