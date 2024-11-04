import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { Base as Command, Input, List, Item } from "§ui/Command";

describe("Command Component", () => {
  it("renders correctly", () => {
    render(
      <Command>
        <Input placeholder="Search..." />
        <List>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </List>
      </Command>
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("filters items based on search input", () => {
    render(
      <Command>
        <Input placeholder="Search..." />
        <List>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </List>
      </Command>
    );
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Item 1" } });
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
  });
});
