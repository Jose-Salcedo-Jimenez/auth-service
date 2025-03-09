import { Request, Response } from "express";
import jwt from "jsonwebtoken";


export const validateToken = async (req: Request, res: Response):Promise <void> => {
    const SECRET_KEY = process.env.JWT_SECRET
    try {

      const autHeader = req.headers.authorization;

    if (!autHeader) {
       res.status(401).json({ error: "Token no proporcionado" });
    }
    const token = autHeader.split(" ")[1];
    const userData = jwt.verify(token, SECRET_KEY);

    if (!userData) {
       res.status(403).json({ error: "Token inválido" });
    }

    res.json({ success: true, user: userData });

  } catch (error) {
    res.status(500).json({ error: "Error validando el token" });
    console.log(error)
  }
};
