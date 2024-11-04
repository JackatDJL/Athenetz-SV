import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Single as Toggle, Group as ToggleGroup, Item as ToggleGroupItem } from "§ui/Toggle";

describe("Toggle Component", () => {
  it("renders correctly", () => {
    render(<Toggle>Toggle</Toggle>);
    expect(screen.getByText("Toggle")).toBeInTheDocument();
  });

  it("applies the correct variant and size", () => {
    render(<Toggle variant="outline" size="lg">Toggle</Toggle>);
    const toggle = screen.getByText("Toggle");
    expect(toggle).toHaveClass("border-l-acc-200/75 dark:border-d-acc-700/75 h-11 px-5");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Toggle onClick={handleClick}>Toggle</Toggle>);
    fireEvent.click(screen.getByText("Toggle"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("ToggleGroup Component", () => {
  it("renders correctly", () => {
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("applies the correct variant and size to items", () => {
    render(
      <ToggleGroup type="multiple" variant="outline" size="sm">
        <ToggleGroupItem value="1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );
    const item1 = screen.getByText("Item 1");
    const item2 = screen.getByText("Item 2");
    expect(item1).toHaveClass("hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-l-txt-500 dark:hover:text-d-txt-500");
    expect(item2).toHaveClass("hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-l-txt-500 dark:hover:text-d-txt-500");
  });

  it("handles item click events", () => {
    const handleClick = jest.fn();
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="1" onClick={handleClick}>Item 1</ToggleGroupItem>
      </ToggleGroup>
    );
    fireEvent.click(screen.getByText("Item 1"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
