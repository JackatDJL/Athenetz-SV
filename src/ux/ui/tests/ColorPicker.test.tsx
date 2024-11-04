import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { ColorPicker } from "§ui/ColourPicker";

describe("ColorPicker Component", () => {
  it("renders correctly", () => {
    render(<ColorPicker color="#FF0000" onChange={() => {}} />);
    expect(screen.getByText("#FF0000")).toBeInTheDocument();
  });

  it("changes color on input", () => {
    const handleChange = jest.fn();
    render(<ColorPicker color="#FF0000" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("#RRGGBB or hsl(h, s%, l%)");
    fireEvent.change(input, { target: { value: "#00FF00" } });
    expect(handleChange).toHaveBeenCalledWith("hsl(120, 100%, 50%)");
  });

  it("selects a preset color", () => {
    const handleChange = jest.fn();
    render(<ColorPicker color="#FF0000" onChange={handleChange} />);
    const presetButton = screen.getByRole("button", { name: "#FF9500" });
    fireEvent.click(presetButton);
    expect(handleChange).toHaveBeenCalledWith("hsl(39, 100%, 50%)");
  });
});
