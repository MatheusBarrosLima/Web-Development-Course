import { Request, Response} from "express";

export const userControllers = {
  async create(req: Request, res: Response) {
    try {
        const{name, age} = req.body;

console.log({name, age});

      res.status(201).json({
        message: "user created!",
      });
    } catch (error) {
        console.error(error);
        
    }
  },
  async read(req: Request, res: Response) {
    try {
        const{ id } = req.params;

      res.status(200).json({
        message: `read user ${id}!`,
      });
    } catch (error) {
        console.error(error);
        
    }
  },
  async update(req: Request, res: Response) {
    try {
        const{name, age} = req.body;

console.log({name, age});

      res.status(200).json({
        message: "user updated!",
      });
    } catch (error) {
        console.error(error);
        
    }
  },
  async delete(req: Request, res: Response) {
    try {
        const{ id } = req.params;

      res.status(200).json({
        message: `deleted user ${id}!`,
      });
    } catch (error) {
        console.error(error);
        
    }
  },
};
