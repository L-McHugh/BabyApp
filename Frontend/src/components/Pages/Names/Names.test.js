import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import React from "react";
import "@testing-library/jest-dom";
import { Names } from "./Names.jsx";

test("renders page", () => {
  //ARRANGE
  render(<Names />);

  //ACT
  const title = screen.getByText("Names");

  //ASSERT
  expect(title).toBeInTheDocument();
});

describe("letter buttons", () => {
  it("renders letters", () => {
    //ARRANGE
    render(<Names />);

    //ACT
    const nameButtons = screen.getAllByRole("button");

    //ASSERT
    expect(nameButtons).toHaveLength(28);
  });

  it("buttons click", () => {
    //ARRANGE
    render(<Names />);

    //ACT
    const buttonClick = screen.getAllByRole("button");
    buttonClick[0].click();

    //ASSERT
    expect(buttonClick).toHaveLength(28);
  });
});
