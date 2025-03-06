import { Router } from "express";
import { AuthController } from "../controllers/Auth.Controller.ts";

export const router = Router();
const authController = new AuthController()
router.post("/login", authController.login.bind(authController))