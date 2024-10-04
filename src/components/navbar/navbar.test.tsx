import TestComponentWrapper, {
  TestProps,
} from "@src/mocks/TestComponentWrapper";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

const MockNavbar = ({
  preloadedState,
}: {
  preloadedState?: TestProps["preloadedState"];
}) => (
  <TestComponentWrapper preloadedState={preloadedState}>
    <Navbar />
  </TestComponentWrapper>
);

describe("testing the navbar", () => {
  test("should toggle nav menu when hamburger icon is clicked", () => {
    render(<MockNavbar />);
    const hamburgerIcon = screen.getAllByTestId("nav-icon")[0]; // first hamburger icon for smaller screens
    fireEvent.click(hamburgerIcon);
    const navMenu = screen.getByTestId("section");
    expect(navMenu).toHaveClass("flex");
  });

  test("should display cart icon and total number of items", () => {
    render(<MockNavbar />);
    const totalElement = screen.getByTestId("total");

    expect(screen.getByTestId("cart-link")).toBeInTheDocument();

    expect(totalElement).toBeInTheDocument();
    expect(totalElement).toHaveTextContent("0");
  });

  test("should show 'Hi, {name}' if the user is logged in", async () => {
    const preloadedState = {
      auth: {
        status: true,
        userData: { name: "Moyinoluwa", email: "test@g.com" },
      },
    };

    render(<MockNavbar preloadedState={preloadedState} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Hi, Moyinoluwa/i)).toHaveLength(2);
    });
  });

  test("should toggle account modal when account icon is clicked", () => {
    render(<MockNavbar />);
    const accountIcon = screen.getByTestId("account-icon");
    fireEvent.click(accountIcon);
    expect(screen.getByText(/Account/i)).toBeInTheDocument();
  });

  test("should show 'Sign In' or 'Sign Up' if not logged in", async () => {
    render(<MockNavbar />);
    const accountIcon = screen.getByTestId("account-section");
    await userEvent.click(accountIcon);

    await waitFor(() => {
      const signUpButton = screen.getByTestId("Sign Up");
      const signInButton = screen.getByTestId("Sign In");

      expect(signUpButton).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();
    });
  });
});
