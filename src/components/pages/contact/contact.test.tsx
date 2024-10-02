import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import Contact from ".";

beforeEach(() => {
  render(<Contact />);
});

describe("testing the contact form", () => {
  test("should show a form and render all inputs and the submit button", () => {
    const input = screen.getByTestId("name");
    const email = screen.getByTestId("email");
    const msg = screen.getByTestId("message");
    const btn = screen.getByTestId("submit-btn")

    expect(input).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(msg).toBeInTheDocument();

    expect(btn).toBeInTheDocument();
  }),
    test("should show the user entered values in the form fields", async () => {
      const input = screen.getByTestId("name");
      const email = screen.getByTestId("email");
      const msg = screen.getByTestId("message");

      await userEvent.type(input, "testing");
      await userEvent.type(email, "akin@gmail.com");
      await userEvent.type(msg, "hello");

      expect(input).toHaveValue("testing");
      expect(email).toHaveValue("akin@gmail.com");
      expect(msg).toHaveValue("hello");
    });
});
