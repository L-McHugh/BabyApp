import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { Feeding } from "../components/Pages/Feeding/Feeding.jsx";
import userEvent from "@testing-library/user-event";
import Form from "../components/Components/Form.js";


//testing buttons
describe("Feeding Title", () => {
  it("renders title", () => {
    //ARRANGE
    render(<Feeding />);

    //ACT
    const title = screen.getByTestId("feedingTitle");

    //ASSERT
    expect(title).toBeInTheDocument();
  });
});

// describe("feeding get request works", () => {
//   it("renders data", async () => {
//     //ARRANGE
//     render(<Feeding />);

//     //ACT
//     const getFeeingButton = screen.getByTestId("getFeedingButton");
//     const dataRender = screen.getByTestId("feedingData");

//     //ASSERT
//     getFeeingButton.click();
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
    render(<Feeding />);

    //ACT
    const sortButton = screen.getByTestId("sortButton");

    //ASSERT
    expect(sortButton).toBeInTheDocument();
  });
});

describe("form input - adding an object", () => {
   it("shows form", () => {
    //ARRANGE
    render(<Feeding />);

    //ACT
    const buttonClick = screen.getByTestId("addFeedingButton");
    buttonClick.click();

    //ASSERT
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });

  it("types in form", () => {
    //ARRANGE
    render(<Form />);

    //ACT
    const formDescription = screen.getByTestId("formDescription");

    userEvent.type (formDescription, "test");

    //ASSERT
    expect(formDescription).toHaveValue("test");
  })
});


