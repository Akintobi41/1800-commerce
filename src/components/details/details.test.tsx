import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { act } from "react";
import { vi } from "vitest";
import Details from ".";
import {
  accordionContent
  
 } from "@utils/constants";
describe("testing details section on homepage", () => {
  const mockSetActiveIndex = vi.fn();

  test("button is rendered in the DOM", () => {
    render(
      <Details el={{
        id: 0,
        title: "",
        text: ""
      }} activeIndex={null} setActiveIndex={function (id: number | null): void {
        throw new Error("Function not implemented.");
      } }
      />
    );
    expect(
      screen.getByTestId("details-btn")
    ).toBeInTheDocument();
  });

  test("summary section is rendered in the DOM when the button is clicked", () => {
    render(
      <Details
        setActiveIndex={mockSetActiveIndex} el={{
          id: 0,
          title: "",
          text: ""
        }} activeIndex={null}      />
    );
    const btn = screen.getByTestId("details-btn");
    act(() => {
      btn.click();
    });

    expect(
      screen.getByTestId("summary-section")
    ).toBeInTheDocument();
  }),
    test('calls "onClick" prop on button click', () => {
      render(
        <Details
        setActiveIndex={mockSetActiveIndex} el={{
          id: 0,
          title: "",
          text: ""
        }} activeIndex={null}   
        />
      );
      const button = screen.getByTestId("details-btn");
      expect(button).toBeInTheDocument();

      fireEvent.click(screen.getByTestId("details-btn"));
      expect(mockSetActiveIndex).toHaveBeenCalled();
    });
});
