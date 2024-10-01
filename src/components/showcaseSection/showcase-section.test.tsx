import { render, screen } from "@testing-library/react";
import ShowcaseSection from ".";

describe("testing images on homepage", () => {
  test("images are rendered in the DOM", () => {
    render(<ShowcaseSection />);
    expect(
      screen.getAllByTestId("showcase-images")[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByTestId("showcase-images")[1]
    ).toBeInTheDocument();
  });
});
