import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction):void =>  {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Acceso denegado, token no proporcionado" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded; // Ahora TypeScript reconoce `req.user`
    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido" });
  }
};
