import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Checkbox } from "§ui/Checkbox";

describe("Checkbox Component", () => {
  it("renders correctly", () => {
    render(<Checkbox>Checkbox Label</Checkbox>);
    expect(screen.getByText("Checkbox Label")).toBeInTheDocument();
  });

  it("toggles state on click", () => {
    render(<Checkbox>Checkbox Label</Checkbox>);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
