import { Router } from "express";
import { userSignUp } from "../controller/user.conroller.js";
const router = Router();


router.post("/signup", userSignUp)

export { router }
