import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";
import { authMiddleware } from "../middleware/authMiddleware.ts";
import { createAccount } from "../api/CreateAccount.ts";
export const router = Router();
const userController = new UserController();

//Definimos la ruta para crear un Usuario con la peticion POST
router.post("/users", userController.createUser.bind(userController));
router.get(
  "/profile",
  authMiddleware,
  userController.getProfile.bind(userController)
);
router.delete(
  "/profile",
  authMiddleware,
  userController.deleteUser.bind(userController)
);

router.post("/profile/createAccount", authMiddleware, createAccount);
router.post("/profile/ById", authMiddleware, userController.findById.bind(userController))


