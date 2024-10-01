import { render, screen } from "@testing-library/react";
import SignOutBtn from ".";
import TestComponentWrapper from "../../mocks/TestComponentWrapper";
import LayoutRoutes from "../layoutRoutes";

const MockComponent = () => (
  <TestComponentWrapper>
    <SignOutBtn className={undefined} />
    <LayoutRoutes />
  </TestComponentWrapper>
);

describe("test sign out button", () => {
  test("sign out button is rendered in the DOM", async () => {
    render(<MockComponent />);
    expect(
      screen.getByRole("button", {
        name: "sign-out-button",
      })
    ).toBeInTheDocument();
  });
});
