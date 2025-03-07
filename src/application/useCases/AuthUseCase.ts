import jwt from "jsonwebtoken";
import { User } from "../../domain/entities/user.ts";
import { ITokenPayload } from "../../domain/repositories/ITokenPayload.ts";
export class AuthUseCase {
  private jwtSecret: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET as string;
    if (!this.jwtSecret) {
      throw new Error(
        "JWT_SECRET no esta definido en las variables de entorno"
      );
    }
  }

  generateToken(user: User):string{
    const payload: ITokenPayload = {
        id: user.id,
        name: user.name,
        email: user.email
    };

    return jwt.sign(payload, this.jwtSecret, {expiresIn: "1h"});
  }
}
