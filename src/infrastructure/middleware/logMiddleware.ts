import { NextFunction, Request, Response } from "express";
import axios from "axios";

const LOG_SERVICE_URL = process.env.LOG_SERVICE_URL;

export const logMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = {
      service: "Users-Auth",
      type: req.method,
    };
    await axios.post(LOG_SERVICE_URL, JSON.stringify(payload), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
  }

  next();
};
