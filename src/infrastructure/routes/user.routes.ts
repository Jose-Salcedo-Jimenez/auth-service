import { Router } from "express";
import { UserController } from "../controllers/user.controller.ts";

export const router = Router();
const userController = new UserController();

//Definimos la ruta para crear un Usuario con la peticion POST
router.post("/users", userController.createUser.bind(userController));
