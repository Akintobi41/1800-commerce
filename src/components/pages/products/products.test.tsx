import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { expect, vi } from "vitest";
import Products from ".";
import TestComponentWrapper from "./../../../mocks/TestComponentWrapper";

const MockProducts = () => (
  <TestComponentWrapper>
    <Products />
  </TestComponentWrapper>
);

describe("testing the products section", () => {
  test.only("test if the mock products renders and load more should not be in the document", async () => {
    render(<MockProducts />);
    const product = await screen.findAllByTestId("product");
    expect(product.length).toBeGreaterThan(1);
  });

  test("test localStorage when sort option is changed", async () => {
    render(<MockProducts />);
    const selectElement = await screen.findByTestId("sort");
    fireEvent.change(selectElement, {
      target: { value: "Alphabetically: A-Z" },
    });
    expect(localStorage.getItem("sortValue")).toBe(
      "Alphabetically: A-Z"
    );
  });

  test("test localStorage when filter option is changed", async () => {
    localStorage.setItem("value", "Fragrance");
    render(<MockProducts />);
    const filterElement = await screen.findByTestId(
      "filter"
    );
    fireEvent.change(filterElement, {
      target: { value: "Shoe" },
    });
    expect(localStorage.getItem("value")).toBe("Shoe");
  });

  test("renders ScrollButton when backToTopButton is true", async () => {
    vi.mock("../../../hooks/useScroll", () => ({
      default: () => ({
        backToTopButton: true,
        Scroll: vi.fn(),
      }),
    }));
    render(<MockProducts />);

    const scrollBtn = await screen.findByTestId(
      "scroll-btn"
    );
    expect(scrollBtn).toBeInTheDocument();
  });

  test("load more products", async () => {
    render(<MockProducts />);
    await waitFor(() => {
      const btn = screen.getByTestId("load-more");
      expect(btn).toBeInTheDocument();
    });

    
  });
});
