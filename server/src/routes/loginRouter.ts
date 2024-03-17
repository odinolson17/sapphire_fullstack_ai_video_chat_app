import { Router, Request, Response } from 'express';

export const loginRouter = Router();

loginRouter.post("/", (_req: Request, res: Response) => {
  res.status(200);
});