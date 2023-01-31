import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import React from "react";
import "@testing-library/jest-dom";
import getRequest from "../components/CRUD_operators/getRequest.js";

test("Test GET request", async () => {
  const response = await getRequest("http://localhost:3001/api", "feeding", 1);
  expect(response).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        baby_id: 1,
        feeding_id: 1,
        start_time: "17/12 14:14",
        volume: 30,
      }),
    ])
  );
});

