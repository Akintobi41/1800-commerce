import { vi } from "vitest";
import { renderWithProviders } from "../../../mocks/TestUtils";
import Cart from './index';

const createProductWithQuantity = (quantity: number) => ({
  description: "The Sports Sneakers in Off White",
  images: [{ fields: { file: "djhkkd" } }],
  name: "Sports Sneakers Off White & Red",
  quantity,
  price: 1000,
  type: "Shoe",
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Cart Component", () => {
  test("Uses preloaded state to render", () => {
    const preloadedState = {
      cart: {
        products: [createProductWithQuantity(2)],
      },
    };
    const { getByText, getByTestId, getByRole } =
      renderWithProviders(<Cart />, { preloadedState });

    expect(getByText("Your Basket")).toBeInTheDocument();
    expect(
      getByText("Sports Sneakers Off White & Red")
    ).toBeInTheDocument();
    expect(getByText("Order Summary")).toBeInTheDocument();
    expect(
      getByText("Delivery Information")
    ).toBeInTheDocument();
    expect(getByText("Total")).toBeInTheDocument();
    expect(getByText("Shipping")).toBeInTheDocument();
    expect(getByText("VAT(5%)")).toBeInTheDocument();
    expect(getByText("₦ 5,100.00")).toBeInTheDocument();
    expect(
      getByRole("button", { name: /Available/i })
    ).toBeInTheDocument();

    expect(getByTestId("checkout")).toBeInTheDocument();
    expect(getByTestId("remove-icon")).toBeInTheDocument();
    expect(
      getByTestId("modify-product")
    ).toBeInTheDocument();
  }),
    test("Displays updated content when more products are added to the cart", () => {
      const preloadedState = {
        cart: {
          products: [createProductWithQuantity(8)],
        },
      };
      const { getByRole } = renderWithProviders(<Cart />, {
        preloadedState,
      });
      expect(
        getByRole("button", { name: /Low Stock/i })
      ).toBeInTheDocument();
    }),
    test("Displays updated content when more products are added to the cart", () => {
      const preloadedState = {
        cart: {
          products: [createProductWithQuantity(10)],
        },
      };
      const { getByRole } = renderWithProviders(<Cart />, {
        preloadedState,
      });
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
      const { getByTestId, getByRole } =
        renderWithProviders(<Cart />, { preloadedState });
      expect(getByTestId("empty-cart")).toBeInTheDocument();
      expect(
        getByRole("button", { name: /Start Shopping/i })
      ).toBeInTheDocument();
    });
});
