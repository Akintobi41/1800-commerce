import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { act } from "react";
import HeaderText from ".";

describe("testing the header text", () => {
  test("banner leaves the DOM when button is clicked", async () => {
    render(<HeaderText />);
    const btn = screen.getByTestId("banner-button");
    act(() => {
      btn.click();
    });
    await waitFor(() => {
      expect(
        screen.queryByTestId("banner")
      ).not.toBeInTheDocument();
    });
  }),
    test("banner is rendered in the DOM", () => {
      render(<HeaderText />);
      expect(
        screen.getByTestId("banner")
      ).toBeInTheDocument();
    });
});
