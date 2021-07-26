import express from "express";
import {edit,join} from "../controllers/userController";
const userRouter = express.Router();


userRouter.get("/edit",edit);


export default userRouter;