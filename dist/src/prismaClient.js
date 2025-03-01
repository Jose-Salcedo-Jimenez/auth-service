import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();


async function create() {
    const user = await prisma.user.create({
        data:{
            name: "Johna Doe",
            email: "johndoe@exaample.com",
            password: "hashedapassword",
        }
    })

    console.log(`Usuario creado `, user)
}

create();