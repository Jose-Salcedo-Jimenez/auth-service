import { User } from "@prisma/client";
import { IUserrepository } from "../../domain/repository/IUserRepository.ts";

export class findByID {
  private userRepository: IUserrepository;
  constructor(userRepository: IUserrepository) {
    this.userRepository = userRepository;
  }
  async execute(id: number): Promise<User | null> {
    const foundUser: any = await this.userRepository.findById(id);
    return foundUser;
  }
}
