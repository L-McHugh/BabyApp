import express from "express";
const nappiesRouter = express.Router();

import {
    getNappyInfo,
    getNappyInfoByDescription,
    addNappyInfo,
    updateNappy,
    deleteNappy
} from "../services/nappies_models.js";


nappiesRouter.get("/:id", async function(req,res){
    const babyID = req.params.id
    const nappyInfo = await getNappyInfo(babyID)
    console.log(nappyInfo)
    return res.json({success:true, payload: nappyInfo})
})

nappiesRouter.get("/:id/:description", async function(req,res){
    const babyID = req.params.id
    const description = req.params.description
    const nappyInfo = await getNappyInfoByDescription(description, babyID)
    return res.json({success:true, payload: nappyInfo})
})


nappiesRouter.post("/", async function(req,res){
  const nappyPost = req.body
  const addNappy = await addNappyInfo(nappyPost);
  console.log(addNappy)
  return res.json({success:true, payload: addNappy})
})

nappiesRouter.patch("/:id", async function(req,res){
  const id = req.params.id
  const nappyPatch = req.body
  const patchNappyInfo = await updateNappy(id,nappyPatch)
  return res.json({success:true, payload: patchNappyInfo})
})

nappiesRouter.delete("/:id", async function(req,res){
  const nappyID = req.params.id
  const deleteNappyInfo = await deleteNappy(nappyID)
  console.log(deleteNappyInfo)
  return res.json({success:true, payload: deleteNappyInfo})
})

export default nappiesRouter;