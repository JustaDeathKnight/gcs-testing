import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render principal", () => {
  render(<App />);
  const linkElement = screen.getByText("Counter: 0");
  expect(linkElement).toBeInTheDocument();
  
});
