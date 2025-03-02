import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as User } from "./src/infrastructure/routes/user.routes.ts";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

//Rutas
app.use("/api", User);

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server runnig on http://localhost:${PORT}`)
})
