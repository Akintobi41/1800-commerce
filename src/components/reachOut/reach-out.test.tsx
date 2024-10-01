import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import Contact from "../pages/contact";
import Faqs from "../pages/faqs";
import ReachOut from "./ReachOut";

describe("testing if the buttons are working properly", () => {
  test("button routes to contact page when clicked", () => {
    render(
      <MemoryRouter>
        {" "}
        <ReachOut />
      </MemoryRouter>
    );
    render(<Contact />);
    const contact = screen.getByTestId("Contact Us");
    userEvent.click(contact);
    expect(
      screen.getByTestId("contact")
    ).toBeInTheDocument();
  }),
    test("button routes to faq page when clicked", () => {
      render(
        <MemoryRouter>
          {" "}
          <ReachOut />
        </MemoryRouter>
      );
      render(<Faqs />);
      const faq = screen.getByTestId("FAQ");
      userEvent.click(faq);
      expect(
        screen.getByTestId("faqs")
      ).toBeInTheDocument();
    });
});
