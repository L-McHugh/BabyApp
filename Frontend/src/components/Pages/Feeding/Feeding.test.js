import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { Feeding } from "./Feeding.jsx";

test("renders page", () => {
  //ARRANGE
  render(<Feeding />);

  //ACT
  const title = screen.getByText("Feeding");

  //ASSERT
  expect(title).toBeInTheDocument();
});

//testing buttons
describe("nappy buttons", () => {
  it("renders buttons", () => {
    //ARRANGE
    render(<Feeding />);

    //ACT
    const nappyButtons = screen.getAllByRole("button");

    //ASSERT
    expect(nappyButtons).toHaveLength(3);
  });

  it("buttons click", () => {
    //ARRANGE
    render(<Feeding />);

    //ACT
    const buttonClick = screen.getAllByRole("button");
    buttonClick[0].click();
    buttonClick[1].click();
    buttonClick[2].click();

    //ASSERT
    expect(buttonClick).toHaveLength(3);
  });
});
