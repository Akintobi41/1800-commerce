import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from './index'

describe("testing home", () => {
  test("homepage is rendered in the DOM", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
});