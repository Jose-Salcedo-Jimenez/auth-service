import { Router } from "express";
import { UserController } from "../controller/createUser.controller.ts";
import { authMiddleware } from "../../../Auth/infrastructure/middleware/authMiddleware.ts";
import { createAccount } from "../../../../infrastructure/api/CreateAccount.ts";
import { sendTransaction } from "../../../../infrastructure/api/Transaction.ts";
import { validateToken } from "../../../../infrastructure/api/validateToken.ts";
import { DeleteController } from "../controller/delete.controller.ts";
import { findByIdController } from "../controller/findById.controller.ts";
import { findByEmailController } from "../controller/findByEmail.controller.ts"; 
import { updateUser } from "../controller/updateUser.controller.ts";
export const router = Router();
const userController = new UserController();
const deleteController = new DeleteController();
const findById = new findByIdController()
const findByEmail = new findByEmailController()
const updatedUser = new updateUser()
//Definimos la ruta para crear un Usuario con la peticion POST
router.post("/users", userController.createUser.bind(userController));
router.get(
  "/profile",
  authMiddleware,
  userController.getProfile.bind(userController)
);
router.delete(
  "/profile/delete",
  authMiddleware,
  deleteController.execute.bind(deleteController)
);

router.post("/profile/createAccount", authMiddleware, createAccount);
router.post("/profile/transaction", sendTransaction);
router.get("/validate-token", validateToken);
router.post(
  "/profile/ById",
  authMiddleware,findById.execute.bind(findById)
 
);
router.post("/profile/ByEmail", authMiddleware, findByEmail.execute.bind(findByEmail));
router.put("/profile/updateUser",authMiddleware, updatedUser.execute.bind(updatedUser))