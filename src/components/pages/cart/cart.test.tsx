import TestComponentWrapper, {
  TestProps,
} from "@src/mocks/TestComponentWrapper";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import Cart from ".";

const createProductWithQuantity = (quantity: number) => ({
  description: "The Sports Sneakers in Off White",
  images: [{ fields: { file: "djhkkd" }, file: { url: "" } }],
  name: "Sports Sneakers Off White & Red",
  quantity,
  price: 1000,
  type: "Shoe",
});

afterEach(() => {
  vi.restoreAllMocks();
});

const MockCart = ({
  preloadedState,
}: {
  preloadedState: TestProps["preloadedState"];
}) => {
  return (
    <TestComponentWrapper preloadedState={preloadedState}>
      <Cart />
    </TestComponentWrapper>
  );
};

describe("Cart Component", () => {
  test("Uses preloaded state to render", () => {
    const preloadedState = {
      cart: {
        products: [createProductWithQuantity(2)],
      },
    };

    const { getByText, getByTestId, getByRole } = render(
      <MockCart preloadedState={preloadedState} />
    );

    expect(getByText("Your Basket")).toBeInTheDocument();
    expect(getByText("Sports Sneakers Off White & Red")).toBeInTheDocument();
    expect(getByText("Order Summary")).toBeInTheDocument();
    expect(getByText("Delivery Information")).toBeInTheDocument();
    expect(getByText("Total")).toBeInTheDocument();
    expect(getByText("Shipping")).toBeInTheDocument();
    expect(getByText("VAT(5%)")).toBeInTheDocument();
    expect(getByText("₦ 5,100.00")).toBeInTheDocument();
    expect(getByRole("button", { name: /Available/i })).toBeInTheDocument();

    expect(getByTestId("checkout")).toBeInTheDocument();
    expect(getByTestId("remove-icon")).toBeInTheDocument();
    expect(getByTestId("modify-product")).toBeInTheDocument();
  }),
    test("Displays updated content when more products are added to the cart", () => {
      const preloadedState = {
        cart: {
          products: [createProductWithQuantity(8)],
        },
      };
      const { getByRole } = render(
        <MockCart preloadedState={preloadedState} />
      );
      expect(getByRole("button", { name: /Low Stock/i })).toBeInTheDocument();
    }),
    test("Displays updated content when more products are added to the cart", () => {
      const preloadedState = {
        cart: {
          products: [createProductWithQuantity(10)],
        },
      };
      const { getByRole } = render(
        <MockCart preloadedState={preloadedState} />
      );
      expect(
        getByRole("button", { name: /Out of Stock/i })
      ).toBeInTheDocument();
    }),
    test("cart empty when no product has been added", () => {
      const preloadedState = {
        cart: {
          products: [],
        },
      };
      const { getByRole, getByTestId } = render(
        <MockCart preloadedState={preloadedState} />
      );
      expect(getByTestId("empty-cart")).toBeInTheDocument();
      expect(getByTestId("start-shopping-btn")).toBeInTheDocument();
    });
});
