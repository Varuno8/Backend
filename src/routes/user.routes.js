import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const userRouter = Router()

userRouter.route("/register").post(registerUser) //// http://localhost:8000/users/register

export default userRouter