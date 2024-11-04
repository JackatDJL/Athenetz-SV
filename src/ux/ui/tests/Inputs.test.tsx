import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Password } from "§ui/Inputs";

describe("PasswordInput Component", () => {
  it("renders correctly", () => {
    render(<Password placeholder="Enter password" />);
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    render(<Password placeholder="Enter password" />);
    const input = screen.getByPlaceholderText("Enter password");
    const toggleButton = screen.getByRole("button");
    expect(input).toHaveAttribute("type", "password");
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });
});
