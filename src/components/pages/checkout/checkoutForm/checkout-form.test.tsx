import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { UserDetails } from "@src/tsTypes/react-types";
import { SetStateAction } from "react";
import CheckoutForm from './index';
import TestComponentWrapper from './../../../../mocks/TestComponentWrapper';

const mockHandleFormSubmit = vi.fn();
const mockSetSuccessfulText = vi.fn();

const mockSetErrors = vi.fn();

const mockFormProps = {
  userData: { name: "" },
  handleFormSubmit: mockHandleFormSubmit,
  setErrorMessage: mockSetSuccessfulText,
  successful: true,
  submit: true,
  setErrors: mockSetErrors,
};

const MockComponent = () => (
  <TestComponentWrapper>
    {" "}
    <CheckoutForm submit={function (details: UserDetails): void {
      throw new Error("Function not implemented.");
    }} error={null} userData={{
      name: 'h',
      email: 'h',
      phoneNumber: 'h',
      address: 'h',
      country: 'h',
      city: 'h',
    } } setError={function (value: SetStateAction<string | null>): void {
      throw new Error("Function not implemented.");
    } } />{" "}
  </TestComponentWrapper>
);

beforeEach(() => {
  render(<MockComponent />);
});

describe("testing checkout ", () => {
  test("should show the user entered values in the form fields", async () => {
    const input = screen.getByTestId("name");
    const email = screen.getByTestId("email");
    const country = screen.getByTestId("country");
    const phoneNo = screen.getByTestId("number");
    const address = screen.getByTestId("address");

    await userEvent.type(input, "testing");
    await userEvent.type(email, "akin@gmail.com");
    await userEvent.type(
      address,
      "1, Rebecca Street, Ojodu."
    );
    await userEvent.type(phoneNo, "09079235596");

    expect(input).toHaveValue("testing");
    expect(email).toHaveValue("akin@gmail.com");
    expect(country).toHaveValue("Nigeria (NG) only");
    expect(address).toHaveValue(
      "1, Rebecca Street, Ojodu."
    );
    expect(phoneNo).toHaveValue("09079235596");
  }),
    test("form should not be submitted if the required fields are empty", async () => {
      await userEvent.click(
        screen.getByTestId("checkout-btn")
      );
      expect(
        mockFormProps.handleFormSubmit
      ).not.toHaveBeenCalled();
    }),
    test("form should be submitted if the required fields have been entered", async () => {
      const input = screen.getByTestId("name");
      const email = screen.getByTestId("email");
      const phoneNo = screen.getByTestId("number");
      const address = screen.getByTestId("address");
      const state = screen.getByTestId("state");
      const city = screen.getByTestId("city");

      await userEvent.type(input, "testing");
      await userEvent.type(email, "akin@gmail.com");
      await userEvent.type(
        address,
        "1, Rebecca Street, Ojodu."
      );
      await userEvent.type(phoneNo, "09079235596");
      await userEvent.type(state, "Anambra");
      await userEvent.type(city, "Umuawulu");

      await userEvent.click(
        screen.getByTestId("checkout-btn")
      );

      expect(mockHandleFormSubmit).toHaveBeenCalledTimes(1);
      expect(mockHandleFormSubmit.mock.calls[0][0]).toEqual(
        {
          name: "testing",
          email: "akin@gmail.com",
          address: "1, Rebecca Street, Ojodu.",
          phoneNumber: "09079235596",
          state: "Anambra",
          city: "Umuawulu",
          country: "Nigeria (NG) only",
        }
      );
    }),
    test("loading state shows on the button once the form is being submitted", () => {
      expect(
        screen.getByTestId("checkout-btn")
      ).toHaveTextContent("Doing Things");
      expect(
        screen.getByTestId("checkout-btn")
      ).not.toHaveTextContent("Submit");
      expect(
        screen.getByTestId("checkout-btn")
      ).toHaveClass("opacity-40");
    });
});
