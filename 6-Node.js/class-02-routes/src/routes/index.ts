import { Request, Response, Router } from "express";

export const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({ className: "Class 02 Routes" });
});

router.get("/users", (_req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Goku" },
    { id: 2, name: "Freeza" },
    { id: 3, name: "Gohan" },
    { id: 4, name: "Broly" },
    { id: 5, name: "Cell" },
    { id: 6, name: "Vegeta" },
  ]);
});

// route params
router.get("/user/:id/:name", (req: Request, res: Response) => {
  const { id, name } = req.params;
  res.json({ id, name });
});

// query params
router.get("/user", (req: Request, res: Response) => {
  const { id, name } = req.query;
  res.json({ id, name });
});

// body params
router.post("/user", (req: Request, res: Response) => {
  const { id, name } = req.body;
  console.log(id, name);
  res.json({ message: "User created!" });
});
