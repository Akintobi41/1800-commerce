import { render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import AboutSection from './index';
import About from "../pages/about";

describe("testing about links", () => {
  test("about section is rendered when link is clicked", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    render(
      <BrowserRouter>
        {" "}
        <AboutSection />
      </BrowserRouter>
    );
    const btn = screen.getByTestId("about-section");
    act(() => {
      btn.click();
    });
    expect(
      screen.getByTestId("about-main")
    ).toBeInTheDocument();
  });
});
