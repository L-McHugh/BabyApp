import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "../components/Components/Form";

describe("<Form/>", () => {
  const mockedProps = {
    label: "Description",
    type: "text",
    placeholder: "Enter description",
    onChangeTime: jest.fn(),
    onChangeDescription: jest.fn(),
    onClick: jest.fn(),
  };

  it("successfully renders the component, matches snapshot", () => {
    const { asFragment } = render(<Form {...mockedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct type", () => {
    render(<Form {...mockedProps} />);
    expect(screen.getByTestId("formDescription")).toHaveAttribute(
      "type",
      "text"
    );
  });

  it("renders the correct placeholder", () => {
    render(<Form {...mockedProps} />);
    expect(screen.getByTestId("formDescription")).toHaveAttribute(
      "placeholder",
      "Enter description"
    );
  });

  it("renders the correct button", () => {
    render(<Form {...mockedProps} />);
    expect(screen.getByTestId("formButton")).toHaveTextContent("Submit");
  });

  it("calls the correct function when the button is clicked", () => {
    render(<Form {...mockedProps} />);
    userEvent.click(screen.getByTestId("formButton"));
    expect(mockedProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("calls the correct function when the description is changed", () => {
    render(<Form {...mockedProps} />);
    userEvent.type(screen.getByTestId("formDescription"), "Test description");
    expect(mockedProps.onChangeDescription).toHaveBeenCalledTimes(16);
  });
});
