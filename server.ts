import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as User } from "./src/infrastructure/routes/user.routes.ts";
import { router as Login } from "./src/infrastructure/routes/login.routes.ts";
import { logMiddleware } from "./src/infrastructure/middleware/logMiddleware.ts";
dotenv.config();

const app = express();

app.use(express.json());
//app.use(logMiddleware);
app.use(cors());

//Rutas
app.use("/api", User);
app.use("/api", Login);
const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server runnig on http://localhost:${PORT}`)
})
