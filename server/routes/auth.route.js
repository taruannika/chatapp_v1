import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/auth.controller.js";
import { validateSignup } from "../middlewares/validator.js";

const router = express.Router();

router.post("/signup", validateSignup, signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
