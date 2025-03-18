import { IUserrepository } from "../../domain/repository/IUserRepository.ts";
import { User } from "../../domain/entities/user.ts";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class UserRepsoitory implements IUserrepository {
  //Metodos
  async create(user: User): Promise<User> {
    console.log(user)
    return await prisma.user.create({ data: user });
  }
  async findById(id: number): Promise<User | null> {
    return await prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { email } });
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    return await prisma.user.update({ where: { id }, data: user });
  }

  async delete(id: number): Promise<boolean> {

    await prisma.user.delete({
      where: { id } 
    });
    return true;
  }


}
