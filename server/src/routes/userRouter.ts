import { Router, Request, Response } from 'express';

export const userRouter = Router();

userRouter.post("/", (_req: Request, res: Response) => {
  res.send(200);
});