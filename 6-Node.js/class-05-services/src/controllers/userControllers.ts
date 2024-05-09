import { Request, NextFunction, Response } from "express";
import { userServices } from "../services/userServices";
import { z } from "zod";
import { compare } from "bcrypt";

export const userControllers = {
  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { password } = req.body;

      const user = await userServices.read(id);

      if (!user) throw res.status(404).json({ message: "user not found!" });

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) throw res.status(401).json({ message: "invalid password" });

      return res.status(200).json({ message: "User read!", user });
    } catch (error) {
      return next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z.string().max(255),
        email: z.string().email().max(255),
        password: z.string().min(7, "Mínimo de 7 caracteres").max(255),
      });

      const { name, email, password } = userSchema.parse(req.body);

      const user = await userServices.create({ name, email, password });

      if (!user) throw res.status(400).json({ message: "user not created" });

      return res.status(201).json({ message: "User created!", user });
    } catch (error) {
      return next(error);
    }
  },
};
