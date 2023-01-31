import express from "express";
const shoppingRouter = express.Router();

import {
    getShoppingInfoByID,
    addShoppingInfo,
    updateShopping,
    deleteShopping
} from "../models/shopping_models.js";



shoppingRouter.get("/:id", async function(req,res){
    const babyID = req.params.id
    const babyInfo = await getShoppingInfoByID(babyID)
    return res.json({success:true, payload: babyInfo})
})

shoppingRouter.post("/", async function(req,res){
  const shoppingPost = req.body
  const addShopping = await addShoppingInfo(shoppingPost);
  return res.json({success:true, payload: addShopping})
})

shoppingRouter.patch("/:id", async function(req,res){
  const id = req.params.id
  const shoppingPatch = req.body
  const patchShoppingInfo = await updateShopping(id,shoppingPatch)
  return res.json({success:true, payload: patchShoppingInfo})
})

shoppingRouter.delete("/:id", async function(req,res){
  const shoppingID = req.params.id
  const deleteShoppingInfo = await deleteShopping(shoppingID)
  return res.json({success:true, payload: deleteShoppingInfo})
})

export default shoppingRouter;