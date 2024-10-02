import { render, screen } from "@testing-library/react";
import { act } from "react";
import { expect } from "vitest";
import TestComponentWrapper from './../../../../mocks/TestComponentWrapper';
import Products from "./../";
const MockProducts = () => (
  <TestComponentWrapper>
    <Products />
  </TestComponentWrapper>
);

describe("testing the products section", () => {
  test("test if select and filter inputs are rendered in the DOM", async () => {
    render(<MockProducts />)
    const sort = await screen.findByTestId("sort");
    const filter = await screen.findByTestId("filter");
    expect(sort).toBeInTheDocument();
    expect(filter).toBeInTheDocument();
  }),
    test("check the number of products rendered to the DOM", async () => {
       render(<MockProducts />)
      const product = await screen.findAllByTestId(
        "products"
      );
      expect(product.length).toBeGreaterThan(2);
    });
});
