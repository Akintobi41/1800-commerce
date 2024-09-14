
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import ProductDetail from './ProductDetail';
import TestComponentWrapper from './../../../mocks/TestComponentWrapper';

const MockComponent = () => (
    <TestComponentWrapper initialEntries={['/products/test']} route='/products/:id' ><ProductDetail /></TestComponentWrapper>
)

describe('testing the product details component',async () => {
    test('renders product after loading', async () => {
        render(<MockComponent />)
        expect(screen.getByTestId('loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByTestId('product')).toBeInTheDocument()

        });

    })
    test("disables 'Add to Bag' button once clicked", async () => {
        render(<MockComponent />)

        // Wait for product to load
        await screen.findByTestId('loader');

        // Assert initial button state
        await waitFor(() => {
            const addToBagButton = screen.getByTestId('add-to-bag');
            expect(addToBagButton).toBeEnabled();
            fireEvent.click(addToBagButton);

            // Button should now be disabled and show "Added to Bag"
            expect(addToBagButton).toBeDisabled();
            expect(addToBagButton).toHaveTextContent("Added to Bag");
        })
    });

})
