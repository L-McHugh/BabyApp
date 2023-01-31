import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import React from "react";
import "@testing-library/jest-dom";
import { Names } from "../components/Pages/Names/Names.jsx";

// error says should be wrapped in act
describe("Names Title", () => {
  it("renders title", () => {
    //ARRANGE
    render(<Names />);

    //ACT
    const title = screen.getByTestId("namesTitle");

    //ASSERT
    expect(title).toBeInTheDocument();
  });
});



// To loop through the letter buttons for testing
describe("letter buttons", () => {
  it("renders letters", () => {
    //ARRANGE
    render(<Names />);
    const nameButtons = screen.getAllByRole("button");

    //ACT
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "All", "Random"];
    for (let i = 0; i < nameButtons.length; i++) {
      nameButtons[i].click();
      expect(nameButtons[i]).toHaveTextContent(letters[i]);
    }

    //ASSERT
    expect(nameButtons).toHaveLength(28);
  });
});


describe("get new name" , () => {
  it("renders button", () => {
    //ARRANGE
    render(<Names />);

    //ACT
    const getNewNameButton = screen.getByTestId("getNewNameButton");
    getNewNameButton.click();

    //ASSERT
    expect(getNewNameButton).toBeInTheDocument();
  });


  it("renders a name", () => {
    //ARRANGE
    render(<Names />);

    //ACT
    const getNewNameButton = screen.getByTestId("getNewNameButton");
    const name = screen.getByTestId("randomName");

    getNewNameButton.click();

    //ASSERT
    expect(name).toStrictEqual(expect.anything());
  });
});