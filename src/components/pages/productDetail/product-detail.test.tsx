import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import ProductDetail from ".";
import TestComponentWrapper from "./../../../mocks/TestComponentWrapper";

const MockComponent = () => (
  <TestComponentWrapper
    initialEntries={["/products/test"]}
    route="/products/:id"
  >
    <ProductDetail />
  </TestComponentWrapper>
);

describe("testing the product details component", async () => {
  test("renders product after loading", async () => {
    render(<MockComponent />);
    expect(
      screen.getByTestId("loader")
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(
        screen.getByTestId("product")
      ).toBeInTheDocument();
    });
  });
  test("disables 'Add to Bag' button once clicked", async () => {
    render(<MockComponent />);

    await screen.findByTestId("loader");

    await waitFor(() => {
      const addToBagButton =
        screen.getByTestId("add-to-bag");
      expect(addToBagButton).toBeEnabled();
      fireEvent.click(addToBagButton);

      expect(addToBagButton).toBeDisabled();
      expect(addToBagButton).toHaveTextContent(
        "Added to Bag"
      );
    });
  });
});
