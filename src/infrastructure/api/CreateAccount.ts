import {Request,  Response } from "express";
import axios from "axios"
import jwt from "jsonwebtoken"
export const createAccount = async (req: Request, res:Response)=>{
    const SECRET_KEY = process.env.JWT_SECRET || "secreto_super_seguro";

    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) res.status(401).json({error:"No token provided"});

        const decoded = jwt.verify(token, SECRET_KEY) as {id: number, name: string};
        
        const API_URL = process.env.CREATE_ACCOUNT;
        
        const payload = {
            user_id:decoded.id,
            placeholder: decoded.name
        }
        const response = await axios.post(API_URL, JSON.stringify(payload), {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        res.json({ success: true, data: response.data });
    
      } catch (error) {
        res.status(500).json({ error: error.response?.data || "Error en la petición" });
        console.log('error +> create', error)
      }
}