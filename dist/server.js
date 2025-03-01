import { prisma } from "./src/prismaClient.ts";
async function create() {
    const user = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "johndoe@example.com",
            password: "hashedpassword",
        }
    });
    console.log(`Usuario creado `, user);
}
create();
