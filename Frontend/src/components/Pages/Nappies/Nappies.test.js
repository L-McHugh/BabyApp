import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import React from "react";
import "@testing-library/jest-dom";
import { Nappies } from "./Nappies.jsx";

test("renders page", () => {
  //ARRANGE
  render(<Nappies />);

  //ACT
  const title = screen.getByText("Nappies");

  //ASSERT
  expect(title).toBeInTheDocument();
});

//testing buttons
describe("nappy buttons", () => {
  it("renders buttons", () => {
    //ARRANGE
    render(<Nappies />);

    //ACT
    const nappyButtons = screen.getAllByRole("button");

    //ASSERT
    expect(nappyButtons).toHaveLength(4);
  });

  it("buttons click", () => {
    //ARRANGE
    render(<Nappies />);

    //ACT
    const buttonClick = screen.getAllByRole("button");
    buttonClick[0].click();

    //ASSERT
    expect(buttonClick).toHaveLength(4);
  });
});

//testing form input
describe("form input", () => {
  it("renders input", () => {
    //ARRANGE
    render(<Nappies />);

    //ACT
    const nappyInput = screen.getAllByRole("textbox");

    //ASSERT
    expect(nappyInput).toHaveLength(1);
  });

  it("input click", () => {
    //ARRANGE
    render(<Nappies />);

    //ACT
    const inputClick = screen.getAllByRole("textbox");
    inputClick[0].click();

    //ASSERT
    expect(inputClick).toHaveLength(1);
  });
});
