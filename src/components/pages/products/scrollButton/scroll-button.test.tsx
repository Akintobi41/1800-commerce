import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { vi } from "vitest";
import ScrollButton from './index';

describe("ScrollButton component", () => {
  test("renders ScrollButton when btn is true", () => {
    const mockScroll = vi.fn();
    render(<ScrollButton btn={true} scroll={mockScroll} />);

    const button = screen.getByTestId("scroll-btn");
    expect(button).toBeInTheDocument();
  });

  test("calls scroll function on button click", () => {
    const mockScroll = vi.fn();
    render(<ScrollButton btn={true} scroll={mockScroll} />);

    const button = screen.getByTestId("scroll-btn");
    fireEvent.click(button);

    expect(mockScroll).toHaveBeenCalledTimes(1);
  });

  test("does not render ScrollButton when button is false", () => {
    render(<ScrollButton btn={false} scroll={() => {}} />);
    const button = screen.queryByTestId("scroll-btn");
    expect(button).not.toBeInTheDocument();
  });
});
