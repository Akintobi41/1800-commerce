
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from './../../mocks/TestUtils';
import Navbar from './Navbar';



describe('testing the navbar', () => {
    test("should toggle nav menu when hamburger icon is clicked", () => {
        renderWithProviders(<Navbar />);
        const hamburgerIcon = screen.getAllByTestId("nav-icon")[0]; // first hamburger icon for smaller screens
        fireEvent.click(hamburgerIcon);
        const navMenu = screen.getByTestId("section");
        expect(navMenu).toHaveClass("flex"); 
    })

    test("should display cart icon and total number of items", () => {

        const { getByTestId, } = renderWithProviders(<Navbar />)
        const totalElement = screen.getByTestId('total');


        expect(getByTestId("cart-link")).toBeInTheDocument();

        expect(totalElement).toBeInTheDocument();
        expect(totalElement).toHaveTextContent('0');

    })

    test("should show 'Hi, {name}' if the user is logged in", async () => {
        const preloadedState = {
            auth: {
                status: true,
                userData: { name: "Moyinoluwa" },
            },
            cart: { products: [] },
        };

        await waitFor(() => {
            const { getByText, getByTestId, getByRole } = renderWithProviders(<Navbar />, { preloadedState })
            expect(getByText("Hi, Moyinoluwa")).toBeInTheDocument();
        })

    })

    test("should toggle account modal when account icon is clicked", () => {
        renderWithProviders(<Navbar />);
        const accountIcon = screen.getByTestId('account-icon')
        fireEvent.click(accountIcon);
        expect(screen.getByText(/Account/i)).toBeInTheDocument();
    });

    test("should show 'Sign In' or 'Sign Up' if not logged in", async () => {
        renderWithProviders(<Navbar />);
        const accountIcon = screen.getByTestId('account-section');
        await userEvent.click(accountIcon);

        await waitFor(() => {
            const signUpButton = screen.getByTestId('Sign Up');
            const signInButton = screen.getByTestId('Sign In');

            expect(signUpButton).toBeInTheDocument();
            expect(signInButton).toBeInTheDocument();
        })
    });
})