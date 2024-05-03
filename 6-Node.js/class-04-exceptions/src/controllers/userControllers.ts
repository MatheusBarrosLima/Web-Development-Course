import { NextFunction, Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, age } = req.body;

    //   console.log(a); // error
    if (!name || !age) {
        throw res.status(400).json({ message: "missing data"})
    }

      console.log(`created user:`, { name, age });

      return res.status(201).json({
        message: "user created!",
      });
    } catch (error) {
      return next(error);
    }
  },

  read() {},
};
