import express from "express"
import CategoryController from "../controller/categoryController.js"

const router = express.Router()
router.post("/create",CategoryController.createCategory)
router.get("/find-all",CategoryController.findAllCategory)
router.get("/find-one/:id",CategoryController.findOneCategory)
router.patch("/update/:id",CategoryController.upDateCategary)
router.delete("/delete/:id",CategoryController.deleteOneCategory)
router.delete("/delete-all",CategoryController.deleteAllCategory)

export default router