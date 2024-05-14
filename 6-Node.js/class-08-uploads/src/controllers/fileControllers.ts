import { NextFunction, Request, Response } from "express";
import { UPLOADS_FOLDER } from "../configs/uploadConfigs";
import path from "path";
import fs from "fs";

export const fileControllers = {
  upload(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) return;
      const { filename, size } = req.file;
      const myFile = {
        name: filename,
        path: `localhost:3000/file/${filename}`,
        size: Number(size / 1024).toFixed(1) + "KB",
      };

      return res.status(201).json({
        message: "file!",
      });
    } catch (error) {
      return next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.params;
      const filePath = path.resolve(UPLOADS_FOLDER, name);

      await fs.promises.stat(filePath);
      await fs.promises.unlink(filePath);
      return res.status(200).json({ message: "delete!" });
    } catch (error) {
      return next(error);
    }
  },
};
