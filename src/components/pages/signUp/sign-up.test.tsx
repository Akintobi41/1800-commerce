import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import SignUp from ".";
import TestComponentWrapper from "../../../mocks/TestComponentWrapper";

const MockComponent = () => (
  <TestComponentWrapper>
    <SignUp />{" "}
  </TestComponentWrapper>
);

describe("testing sign up inputs", () => {
  test("renders all input fields", () => {
    render(<MockComponent />);

    const name = screen.getAllByPlaceholderText(
      "name should not be more than 20 characters"
    );
    const pword = screen.getAllByPlaceholderText(
      "Enter password (8-15 characters)"
    );
    const btn = screen.getByRole("button", {
      name: "Create Account",
    });

    expect(name[0]).toBeInTheDocument(); //first name input to be in the document
    expect(name[1]).toBeInTheDocument(); //last name input to be in the document

    expect(pword[0]).toBeInTheDocument(); // password to be in the document
    expect(pword[1]).toBeInTheDocument(); // confirmed password to be in the document

    expect(
      screen.getByPlaceholderText("name@example.com")
    ).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  }),
    test("toggles password visibility", () => {
      render(<MockComponent />);

      const passwordInput = screen.getAllByPlaceholderText(
        "Enter password (8-15 characters)"
      )[0];
      const toggleButton = screen.getAllByTestId(
        "eye-slash-icon"
      )[0];

      expect(passwordInput).toHaveAttribute(
        "type",
        "password"
      );

      fireEvent.click(toggleButton);

      expect(passwordInput).toHaveAttribute("type", "text");
    });
});
