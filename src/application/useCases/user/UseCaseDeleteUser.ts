import { User } from "@prisma/client";
import { IUserrepository } from "../../../domain/repositories/IUserRepository.ts";

export class deleteUser {
  private userRepository: IUserrepository;
  constructor(userRepository: IUserrepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number): Promise<User | null> {
    const deletedUser: any = await this.userRepository.findById(id);
    return deletedUser;
  }
}
