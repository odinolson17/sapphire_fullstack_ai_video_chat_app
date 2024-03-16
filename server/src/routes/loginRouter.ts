import { Router, Request, Response } from 'express';

export const loginRouter = Router();

loginRouter.post("/", (_req: Request, res: Response) => {
  res.send(200);
});