import { render, screen } from "@testing-library/react";
import { act } from "react";
import { expect } from "vitest";
import TestComponentWrapper from './../../../../mocks/TestComponentWrapper';
import Products from './../index';
const MockProducts = () => (
  <TestComponentWrapper>
    <Products />
  </TestComponentWrapper>
);

describe("testing the products section", () => {
  test("test if select and filter inputs are rendered in the DOM", async () => {
    await act(() => render(<MockProducts />));
    const sort = await screen.findByTestId("sort");
    const filter = await screen.findByTestId("filter");
    expect(sort).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
  }),
    test("check the number of products rendered to the DOM", async () => {
      await act(() => render(<MockProducts />));
      const product = await screen.findAllByTestId(
        "product"
      );
      expect(product.length).toBeGreaterThan(2);
    });
});
