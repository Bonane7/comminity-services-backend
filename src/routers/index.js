import express from "express"
import userRoute from "./userRouter.js"
import categoryRouter from "./categoryRouter.js"

const router = express.Router()
 router.use("/user",userRoute)
 router.use("/category",categoryRouter)
export default router