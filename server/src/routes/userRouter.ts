import { Router, Request, Response } from 'express';

export const userRouter = Router();

userRouter.post("/", (_req: Request, res: Response) => {
  res.status(200);
});