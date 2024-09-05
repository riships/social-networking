import { Router } from "express";
import { userLogin, userSignUp } from "../controller/user.conroller.js";
const router = Router();


router.post("/signup", userSignUp)

router.post("/login", userLogin)

export { router }