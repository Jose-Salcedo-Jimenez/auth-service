import bcrypt from "bcryptjs";
import { IUserrepository } from "../../domain/repositories/IUserRepository.ts";
import { AuthUseCase } from "./AuthUseCase.ts";

export class LoginUseCase {
  private userRepository: IUserrepository;
  private authUseCase: AuthUseCase;

  constructor(useRepository: IUserrepository) {
    this.userRepository = useRepository;
    this.authUseCase = new AuthUseCase();
  }

  async execute(email: string, password: string): Promise<{ token: string }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error("Credenciales nvalidas");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Credenciales invalidas");

    const token = this.authUseCase.generateToken(user);

    return { token };
  }
}
