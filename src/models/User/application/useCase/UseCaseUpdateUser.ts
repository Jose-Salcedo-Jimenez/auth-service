import { User } from "@prisma/client";
import { IUserrepository } from "../../domain/repository/IUserRepository.ts";

export class updateUser{
    private userRepository: IUserrepository;
    constructor(userRepository: IUserrepository){
        this.userRepository = userRepository;
    }

    async execute(id:number, user:User):Promise<User| null>{
        const updatedUser:any = await this.userRepository.update(id, user);
        return updatedUser
    }
}