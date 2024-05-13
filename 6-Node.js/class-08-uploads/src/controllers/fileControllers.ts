import { NextFunction, Request, Response } from "express";

export const fileControllers = {
  upload(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(201).json({
        message: "file!",
      });
    } catch (error) {
      return next(error);
    }
  },

  delete(req: Request, res: Response, ) {
    return res.status(200).json({message: "delete!"});
  },
};
