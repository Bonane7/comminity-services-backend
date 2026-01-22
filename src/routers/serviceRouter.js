import express from "express"
import ServiceController from "../controller/serviceController.js"
import {VerifyAccess} from "../midleware/verifyAccess.js"

const router=express.Router()
router.post("/create",VerifyAccess("provider"),ServiceController.createService)
export default router