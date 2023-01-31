import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import React from "react";
import "@testing-library/jest-dom";
import ProgressBar from "../components/Components/ProgressBar.js";

// unit tests ideas for app components
test("progress bar renders", () => {
  render(<ProgressBar />);
  expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
});

test("progress bar has correct width", () => {
    render(<ProgressBar />);
    expect(screen.getByTestId("progress-bar")).toHaveStyle("width: 50%");
    }
)



