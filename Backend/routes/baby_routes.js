import express from "express";
const router = express.Router();

import {
  getBabyInfoByID,
  addBabyInfo,
  updateBaby,
  deleteBaby,
} from "../models/baby_models.js";

router.get("/:id", async function (req, res) {
  const babyID = req.params.id;
  console.log(babyID);
  const babyInfo = await getBabyInfoByID(babyID);
  return res.json({ success: true, payload: babyInfo });
});

router.post("/", async function (req, res) {
  const baby = req.body;
  console.log(baby);
  const addBaby = await addBabyInfo(baby);
  return res.json({ success: true, payload: addBaby });
});

router.patch("/:id", async function (req, res) {
  const id = req.params.id;
  const baby = req.body;
  console.log(baby);
  const patchBabyInfo = await updateBaby(id, baby);
  return res.json({ success: true, payload: patchBabyInfo });
});

router.delete("/:id", async function (req, res) {
  const babyID = req.params.id;
  const deleteBabyInfo = await deleteBaby(babyID);
  return res.json({ success: true, payload: deleteBabyInfo });
});

export default router;
