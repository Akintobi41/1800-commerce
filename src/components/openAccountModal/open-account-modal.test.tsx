import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import store from "../../store";
import OpenAccountModal from "./OpenAccountModal";

describe("testing the account modal", () => {
  test("test that account icon should be in the DOM", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <OpenAccountModal />
        </MemoryRouter>
      </Provider>
    );
    const icon = screen.getByTestId("account-icon");
    expect(icon).toBeInTheDocument();
  });
});
