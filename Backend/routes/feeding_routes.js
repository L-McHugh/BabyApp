import express from "express";
const feedingRouter = express.Router();

import {
  getFeedingInfoByID,
  getFeedingInfoByVolume,
  addFeedingInfo,
  updateFeeding,
  deleteFeeding,
} from "../models/feeding_models.js";

feedingRouter.get("/:id", async function (req, res) {
  const babyID = req.params.id;
  const babyInfo = await getFeedingInfoByID(babyID);
  console.log(babyInfo);
  return res.json({ success: true, payload: babyInfo });
});

feedingRouter.get("/:id/:volume", async function (req, res) {
  const babyID = req.params.id;
  const volume = req.params.volume;
  const babyInfo = await getFeedingInfoByVolume(volume, babyID);
  return res.json({ success: true, payload: babyInfo });
});

feedingRouter.post("/", async function (req, res) {
  const feedingPost = req.body;
  const addFeeding = await addFeedingInfo(feedingPost);
  return res.json({ success: true, payload: addFeeding });
});

feedingRouter.patch("/:id", async function (req, res) {
  const id = req.params.id;
  const feedingPatch = req.body;
  const patchFeedingInfo = await updateFeeding(id, feedingPatch);
  console.log(patchFeedingInfo);
  return res.json({ success: true, payload: patchFeedingInfo });
});

feedingRouter.delete("/:id", async function (req, res) {
  const feedingID = req.params.id;
  const deleteFeedingInfo = await deleteFeeding(feedingID);
  return res.json({ success: true, payload: deleteFeedingInfo });
});

export default feedingRouter;
