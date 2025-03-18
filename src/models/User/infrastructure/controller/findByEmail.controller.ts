import { Request, Response } from "express";
import { UserRepsoitory } from "../repository/UserRepository.ts";
import { useCaseFindByEmail } from "../../application/useCase/UseCaseFindByEmail.ts";
export class findByEmailController {
  private findUser: useCaseFindByEmail;
  constructor() {
    const userRepository = new UserRepsoitory();
    this.findUser = new useCaseFindByEmail(userRepository);
  }

  async execute(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    try {
      const foundUser = await this.findUser.execute(email);
      console.log(foundUser)
      if (!foundUser)
        throw new Error(
          `No existe ningun usuario con este Correo Electronico ${foundUser}`
        );
      delete foundUser.password;
      return res
        .status(200)
        .json({
          Message: "El usuario se ha encontrado exitosamente",
          user: foundUser,
        });
    } catch (error) {
      return res.status(401).json({ error:  error.message });
    }
  }
}
