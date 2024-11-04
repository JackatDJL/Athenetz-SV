import * as React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Icon } from "§ui/Feather";

describe("Feather Icon Component", () => {
  it("renders correctly with default props", () => {
    render(<Icon icon="X" />);
    expect(screen.getByRole("svg")).toBeInTheDocument();
  });

  it("renders with specified size and color", () => {
    render(<Icon icon="X" size="lg" color="#FF0000" />);
    const icon = screen.getByRole("svg");
    expect(icon).toHaveAttribute("stroke", "#FF0000");
    expect(icon).toHaveAttribute("width", "30");
    expect(icon).toHaveAttribute("height", "30");
  });
});
