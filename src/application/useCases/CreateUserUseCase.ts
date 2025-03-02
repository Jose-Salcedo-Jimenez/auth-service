import { User } from "../../domain/entities/user.ts";
import { IUserrepository } from "../../domain/repositories/IUserRepository.ts";
import { validateUser } from "../../infrastructure/validators/userValidator.ts";
export class CreareUserCase {
  private userRepository: IUserrepository;
  constructor(userRepository: IUserrepository) {
    this.userRepository = userRepository;
  }
  async execute(userData: User): Promise<User> {
    const { error } = validateUser.validate(userData);
    
    error && console.error(error.details[0].message);

    const existingUser = await this.userRepository.findByEmail(userData.email);

    existingUser && console.error("El usuario ya existe");

    const newUser = await this.userRepository.create(userData);

    return newUser;
  }
}
