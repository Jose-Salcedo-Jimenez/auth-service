import { Request, Response } from "express";
import { UserRepsoitory } from "../repositories/UserRepository.ts";
import { CreareUserCase } from "../../application/useCases/CreateUserUseCase.ts";

export class UserController {
  private createUserCase: CreareUserCase;

  constructor() {
    const userRepository = new UserRepsoitory();
    this.createUserCase = new CreareUserCase(userRepository);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      const newUser = await this.createUserCase.execute({
        name,
        email,
        password,
      });

      return res
        .status(201)
        .json({ message: "usuario creado con exito", user: newUser });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
