import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import Nappies from "../components/Pages/Nappies/Nappies.jsx";
import userEvent from "@testing-library/user-event";


//testing buttons
describe("Feeding Title", () => {
  it("renders title", () => {
    //ARRANGE
    render(<Nappies />);

    //ACT
    const title = screen.getByTestId("nappyTitle");

    //ASSERT
    expect(title).toBeInTheDocument();
  });
});

// describe("feeding get request works", () => {
//   it("renders data", async () => {
//     //ARRANGE
//     render(<Nappies />);

//     //ACT
//     const getNappyButton = screen.getByTestId("getNappyButton");
//     const dataRender = screen.getByTestId("nappyData");

//     //ASSERT
//     getNappyButton.click();
//     await waitFor(() => {
//       // waitFor  is a function from @testing-library/react that waits for the callback to not throw an error
//       expect(dataRender).toBeInTheDocument();
//     });
//   });
// });

//testing sort button
describe("sort button", () => {
  it("renders button", () => {
    //ARRANGE
    render(<Nappies />);

    //ACT
    const sortButton = screen.getByTestId("sortButton");

    //ASSERT
    expect(sortButton).toBeInTheDocument();
  });
});


describe("searching for Poop", () => {
  it("renders button", () => {
    //ARRANGE
    render(<Nappies />);

    //ACT
    const searchFormInput = screen.getByTestId("searchFormInput");
    const searchFormButton = screen.getByTestId("searchFormButton");
    // const itemList = screen.getByTestId("itemList");

    userEvent.type(searchFormInput, "Poop");
    searchFormButton.click();

    //ASSERT
    expect(searchFormButton).toBeInTheDocument();
    expect(searchFormInput).toBeInTheDocument();
    expect(searchFormInput).toHaveValue("Poop");
    // expect information to be on the page - need to sort this
    // expect(itemList).toBeInTheDocument();
  });
});


