import { Request, Response } from "express";
import { UserRepsoitory } from "../repository/UserRepository.ts";
import { CreareUserCase } from "../../application/useCase/CreateUserUseCase.ts";
import { sendEmail } from "../../../../infrastructure/api/sendEmail.ts";
export class UserController {
  private createUserCase: CreareUserCase;
  constructor() {
    const userRepository = new UserRepsoitory();
    this.createUserCase = new CreareUserCase(userRepository);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const userData = req.body;
    try {
      const newUser = await this.createUserCase.execute(userData);
//      await sendEmail(userData.email);

      delete newUser.password
      return res
        .status(201)
        .json({ message: "usuario creado con exito", user: newUser });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getProfile(req: Request, res: Response) {
    return res.json({ message: "Perfil de usuario", user: req.user });
  }


}
