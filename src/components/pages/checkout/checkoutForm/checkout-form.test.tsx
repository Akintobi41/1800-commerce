import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { UserDetails } from "@src/tsTypes/react-types";
import CheckoutForm from './index';
import TestComponentWrapper from './../../../../mocks/TestComponentWrapper';

const mockHandleFormSubmit = vi.fn();
const mockSetSuccessfulText = vi.fn();
const mockSetErrors = vi.fn();

const mockFormProps = {
  userData: { name: "Test User", email: "test@example.com", phoneNumber: "1234567890", address: "123 Test St", country: "USA", city: "Test City" },
  handleFormSubmit: mockHandleFormSubmit,
  setErrorMessage: mockSetSuccessfulText,
  successful: true,
  submit: true,
  setErrors: mockSetErrors,
};

const MockComponent = () => (
  <TestComponentWrapper>
    <CheckoutForm
      submit={(details: UserDetails) => {
        mockHandleFormSubmit(details);
      }}
      error={null}
      userData={mockFormProps.userData}
      setError={mockSetErrors}
    />
  </TestComponentWrapper>
);

beforeEach(() => {
  render(<MockComponent />);
  vi.clearAllMocks();
});

describe("testing checkout", () => {
  test("should show the user entered values in the form fields", async () => {
    const input = screen.getByTestId("name");
    const email = screen.getByTestId("email");
    const phoneNo = screen.getByTestId("number");
    const address = screen.getByTestId("address");
    const city = screen.getByTestId("city");

    await userEvent.type(input, "testing");
    await userEvent.type(email, "akin@gmail.com");
    await userEvent.type(address, "1, Rebecca Street, Ojodu.");
    await userEvent.type(phoneNo, "09079235596");
    await userEvent.type(city, "Umuawulu");

    expect(input).toHaveValue("testing");
    expect(email).toHaveValue("akin@gmail.com");
    expect(address).toHaveValue("1, Rebecca Street, Ojodu.");
    expect(phoneNo).toHaveValue("09079235596");
    expect(city).toHaveValue("Umuawulu");
  });

  test("form should not be submitted if the required fields are empty", async () => {
    await userEvent.click(screen.getByTestId("checkout-btn"));
    expect(mockHandleFormSubmit).not.toHaveBeenCalled();
  });

  test("form should be submitted if the required fields have been entered", async () => {
    const input = screen.getByTestId("name");
    const email = screen.getByTestId("email");
    const phoneNo = screen.getByTestId("number");
    const address = screen.getByTestId("address");
    const city = screen.getByTestId("city");

    await userEvent.type(input, "testing");
    await userEvent.type(email, "akin@gmail.com");
    await userEvent.type(address, "1, Rebecca Street, Ojodu.");
    await userEvent.type(phoneNo, "09079235596");
    await userEvent.type(city, "Umuawulu");

    await userEvent.click(screen.getByTestId("checkout-btn"));

    expect(mockHandleFormSubmit).toHaveBeenCalledTimes(1);
  });
});
