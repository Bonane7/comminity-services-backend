//1) import express qui contien le code router
import express from "express";
import controller from "../controller/userController.js";

//2) amener les code qui se trouve dans express dans router
const router = express.Router();
//3)
router.get("/user",controller)



export default router