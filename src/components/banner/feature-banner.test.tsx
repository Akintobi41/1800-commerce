import { render, screen } from "@testing-library/react";
import { act } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import FeatureBanner from ".";
import store from "../../store";
import Products from "../pages/products";

const queryClient = new QueryClient();

describe("", () => {
  test('when "Shop- New Arrivals" button is clicked it routes to Products', () => {
    render(
      <BrowserRouter>
        <FeatureBanner />
      </BrowserRouter>
    );
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {" "}
          <BrowserRouter>
            <Products />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    );
    const btn = screen.getByTestId("product-btn");
    act(() => {
      btn.click();
    });
    expect(
      screen.getByTestId("products")
    ).toBeInTheDocument();
  });
});
