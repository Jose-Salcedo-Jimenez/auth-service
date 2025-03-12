import { deleteUser } from "../../../application/useCases/user/UseCaseDeleteUser.ts";
import { UserRepsoitory } from "../../repositories/UserRepository.ts";
import { Request, Response } from "express";
export class DeleteController {
  private deleteUser: deleteUser;

  constructor() {
    const userRepository = new UserRepsoitory();
    this.deleteUser = new deleteUser(userRepository);
  }
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const userDelete = await this.deleteUser.execute(id);
      return res
        .status(201)
        .json({ message: "Usuario Eliminado con Exito", user: userDelete });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
