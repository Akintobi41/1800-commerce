import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import store from "../../store";
import NavMenu from "./navMenu/NavMenu";

describe("testing navbar", () => {
  test("test if cart link is in the document", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        {" "}
        <Provider store={store}>
          <NavMenu />{" "}
        </Provider>{" "}
      </MemoryRouter>
    );
    const link = await waitFor(() =>
      getByTestId("cart-link")
    );
    expect(link).toBeInTheDocument();
  });
});
