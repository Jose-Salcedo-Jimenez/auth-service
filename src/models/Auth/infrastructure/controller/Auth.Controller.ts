import { Request, Response } from "express";
import { UserRepsoitory } from "../../../User/infrastructure/repository/UserRepository.ts";
import { LoginUseCase } from "../../application/useCase/LoginUseCase.ts";
export class AuthController{
     async login(req: Request, res:Response){
        const {email, password} = req.body;
        const userRepository = new UserRepsoitory();
        const loginUserCase = new LoginUseCase(userRepository);

        try{
            const {token} = await loginUserCase.execute(email, password);
            return res.json({message:"Login Exitoso", token})
        }catch(error){
            return res.status(401).json({message: error.message})
        }
    }
}