import { Request, NextFunction, Response } from "express";
import { userServices } from "../services/userServices";

export const userControllers = {
  read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "User read!" });
    } catch (error) {
      return next(error);
    }
  },

  create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, age } = req.body;

const user = userServices.create({name, age})

      return res.status(201).json({ message: "User created!", user });
    } catch (error) {
      return next(error);
    }
  },
};
