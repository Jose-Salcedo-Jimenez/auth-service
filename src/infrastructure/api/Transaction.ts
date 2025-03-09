import { Request, Response } from "express";
import axios from "axios";

const TRANSACTION = process.env.TRANSACTION;

export const sendTransaction = async (req: Request, res: Response):Promise <void> => {
  try {
    const { amount, to_account_number} = req.body;
    const token = req.headers.authorization; 

    if (!token) {
       res.status(401).json({ error: "Token no proporcionado" });
    }

    const response = await axios.post(
      `${TRANSACTION}`,
      { amount, to_account_number },
      {
        headers: { Authorization: token }, 
      }
    );

    res.json({ success: true, data: response.data });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.response?.data || "Error en la transacción" });
  }
};
