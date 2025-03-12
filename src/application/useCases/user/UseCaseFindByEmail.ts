import { User } from "@prisma/client";
import { IUserrepository } from "../../../domain/repositories/IUserRepository.ts";

export class useCaseFindByEmail {
  private userRepository: IUserrepository;
  constructor(userRepository: IUserrepository) {
    this.userRepository = userRepository;
  }

  async execute(email: string): Promise<User | null> {
    const foundUser: any = await this.userRepository.findByEmail(email);
    return foundUser;
  }
}
