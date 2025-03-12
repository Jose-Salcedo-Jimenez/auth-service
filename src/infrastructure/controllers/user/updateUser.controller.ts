import { updateUser as UseCaseUpdateUser } from "../../../application/useCases/user/UseCaseUpdateUser.ts"
import { UserRepsoitory } from "../../repositories/UserRepository.ts";
import { Request, Response } from "express";
export class updateUser{
    private userRepository: UseCaseUpdateUser;
    constructor(){
        const userRepository = new UserRepsoitory();
        this.userRepository = new UseCaseUpdateUser(userRepository)
    }

    async execute(req:Request, res:Response):Promise<Response>{
        const data = req.body
        try{
            const updatedUser = await this.userRepository.execute(data.id, data);
            if(!updateUser)throw new Error("Error al Actualizar el usuario");

            return res.status(200).json({message:"Usuario actualizado exitosamente", updatedUser})
        }catch(error){
            return res.status(401).json({error: error.message})
        }
    }
}