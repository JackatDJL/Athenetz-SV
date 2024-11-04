import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Base as Calendar } from "§ui/Calender";

describe("Calendar Component", () => {
  it("renders correctly", () => {
    render(<Calendar />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("doesnt work", () => {
    expect(true).toBe(true);
  });
});
