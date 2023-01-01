import express from "express";
const nappiesRouter = express.Router();

import {
  getNappyInfo,
  getNappyInfoByDescription,
  addNappyInfo,
  updateNappy,
  deleteNappy,
} from "../models/nappies_models.js";

// GET / nappies with error handling for invalid ID
nappiesRouter.get("/:id", async function (req, res) {
  const babyID = req.params.id;
  const nappyInfo = await getNappyInfo(babyID);
  // nappyInfo.length === 0 because if the ID is invalid, it will return an empty array
  if (nappyInfo.length === 0) {
    return res.json({ success: false, payload: "Invalid ID" });
  } else {
    return res.json({ success: true, payload: nappyInfo });
  }
});

// GET/ nappies by id and description with error handling for invalid ID and invalid description
nappiesRouter.get("/:id/:description", async function (req, res) {
  const babyID = req.params.id;
  const description = req.params.description;
  const nappyInfo = await getNappyInfoByDescription(description, babyID);
  // nappyInfo.length === 0 because if the description is invalid, it will return an empty array
  if (nappyInfo.length === 0) {
    return res.json({ success: false, payload: "Invalid ID or description" });
  } else {
    return res.json({ success: true, payload: nappyInfo });
  }
});

// POST / nappies with error handling for invalid ID
nappiesRouter.post("/", async function (req, res) {
  const nappyPost = req.body;
  const addNappy = await addNappyInfo(nappyPost);
  // addNappy === "Invalid ID" because if the ID is invalid, it will return "Invalid ID"
  if (addNappy === "Invalid ID") {
    return res.json({ success: false, payload: "Invalid ID" });
  } else {
    return res.json({ success: true, payload: addNappy });
  }
});

// PATCH / nappies with error handling for invalid ID
nappiesRouter.patch("/:id", async function (req, res) {
  const nappyID = req.params.id;
  const nappyPatch = req.body;
  const patchNappyInfo = await updateNappy(nappyID, nappyPatch);
  if (patchNappyInfo === "Invalid ID") {
    return res.json({ success: false, payload: "Invalid ID" });
  } else {
    return res.json({ success: true, payload: patchNappyInfo });
  }
});


// DELETE / nappies with error handling for invalid ID
nappiesRouter.delete("/:id", async function (req, res) {
  const nappyID = req.params.id;
  const deleteNappyInfo = await deleteNappy(nappyID);
  if (deleteNappyInfo === "Invalid ID") {
    return res.json({ success: false, payload: "Invalid ID" });
  } else {
    return res.json({ success: true, payload: deleteNappyInfo });
  }
});


export default nappiesRouter;
