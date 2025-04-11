import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authService";

export const register = async (req: Request, res: Response) => {
  try {
    const token = await registerUser(req.body.name, req.body.email, req.body.password, req.body.role);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
      },
      token: token,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};





