import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import ViewPassword from "./";

describe("ViewPassword component", () => {
  test("should render EyeIcon when view is true", () => {
    render(<ViewPassword view={true} onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />);
    expect(
      screen.getByTestId("eye-icon")
    ).toBeInTheDocument();
  });

  test("should render EyeSlashIcon when view is false", () => {
    render(<ViewPassword view={false} onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />);
    expect(
      screen.getByTestId("eye-slash-icon")
    ).toBeInTheDocument();
  });
});
