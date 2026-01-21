import express from "express"
import controller from "../controller/userController.js"
import EmailExist from "../midleware/validation.js"
import { VerifyAccess } from "../midleware/verifyAccess.js"

const router = express.Router()
router.post("/create", EmailExist, controller.signup)
router.post("/login",controller.login)
router.get("/users",VerifyAccess('client'),controller.getAllUsers)
router.get("/user/:id",controller.getOneUser)
router.delete("/users",controller.deletAllUser)
router.patch("/user/:id",controller.updateUser)
export default router