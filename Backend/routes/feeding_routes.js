import express from "express";
const feedingRouter = express.Router();

import {
  getFeedingInfoByID,
  getFeedingInfoByVolume,
  addFeedingInfo,
  updateFeeding,
  deleteFeeding,
} from "../models/feeding_models.js";

// GET /feeding with error handling for invalid ID
feedingRouter.get("/:id", async function (req, res) {
  const babyID = req.params.id;
  const babyInfo = await getFeedingInfoByID(babyID);
  // babyInfo.length === 0 because if the ID is invalid, it will return an empty array
  if (babyInfo.length === 0) {
    return res.json({ success: false, payload: "Invalid ID" });
  } else {
    return res.json({ success: true, payload: babyInfo });
  }
});

// Didn't need in the end as created a progress bar
// GET /feeding by id and volume with error handling for invalid ID and invalid volume

// feedingRouter.get("/:id/:volume", async function (req, res) {
//   const babyID = req.params.id;
//   const volume = req.params.volume;
//   const babyInfo = await getFeedingInfoByVolume(volume, babyID);
//   // babyInfo.length === 0 because if the volume is invalid, it will return an empty array
//   if (babyInfo.length === 0) {
//     return res.json({ success: false, payload: "Invalid ID or volume" });
//   } else {
//     return res.json({ success: true, payload: babyInfo });
//   }
// });


// POST /feeding with error handling for invalid ID
feedingRouter.post("/", async function (req, res) {
  const feedingPost = req.body;
  const addFeeding = await addFeedingInfo(feedingPost);
  if (addFeeding === "Invalid ID") {
    return res.json({ success: false, payload: "Invalid ID" });
  } else {
    return res.json({ success: true, payload: addFeeding });
  }
});

// PATCH /feeding with error handling for invalid ID
feedingRouter.patch("/:id", async function (req, res) {
  const feedingID = req.params.id;
  const feedingPatch = req.body;
  const patchFeedingInfo = await updateFeeding(feedingID, feedingPatch);
  if (patchFeedingInfo === "Invalid ID") {
    return res.json({ success: false, payload: "Invalid ID" });
  } else {
    return res.json({ success: true, payload: patchFeedingInfo });
  }
});

// DELETE /feeding with error handling for invalid ID
feedingRouter.delete("/:id", async function (req, res) {
  const feedingID = req.params.id;
  const deleteFeedingInfo = await deleteFeeding(feedingID);
  if (deleteFeedingInfo === "Invalid ID") {
    return res.json({ success: false, payload: "Invalid ID" });
  } else {
    return res.json({ success: true, payload: deleteFeedingInfo });
  }
});

export default feedingRouter;
