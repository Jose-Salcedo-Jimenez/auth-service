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
    const userData = req.body;
    try {
      const newUser = await this.createUserCase.execute(userData);

      return res
        .status(201)
        .json({ message: "usuario creado con exito", user: newUser });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response>{
    const {id} = req.body;
    console.log(id)
    try{
      const userDelete = await this.createUserCase.delete(id);
      return res.status(201).json({message: "Usuario Eliminado con Exito", user: userDelete})
    }catch(error){
      res.status(400).json({error: error.message})
    }
  }

  async getProfile(req: Request, res: Response) {
    return res.json({ message: "Perfil de usuario", user: req.user });
  }
}
