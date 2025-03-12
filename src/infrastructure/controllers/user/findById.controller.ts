import { Request, Response } from "express";
import { UserRepsoitory } from "../../repositories/UserRepository.ts";
import { findByID } from "../../../application/useCases/user/UseCaseFindById.ts";
export class findByIdController {
  private findUser: findByID;
  constructor() {
    const userRepository = new UserRepsoitory();
    this.findUser = new findByID(userRepository);
  }

  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const foundUser = await this.findUser.execute(id);
      if (!foundUser)
        throw new Error(
          `Error al encontrar el Usuario, no existe ningun Usuario con el ID ${id}`
        );
      return res.status(200).json({ message: "Usuario Encontrado", User: foundUser });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}
