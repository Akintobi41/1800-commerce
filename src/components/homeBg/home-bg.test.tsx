import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FeatureBanner from "../banner";

describe("testing images on homepage", () => {
  test("images are rendered in the DOM", () => {
    render(
      <BrowserRouter>
        <FeatureBanner />
      </BrowserRouter>
    );
    expect(
      screen.getByTestId("homepage-images")
    ).toBeInTheDocument();
  });
});
