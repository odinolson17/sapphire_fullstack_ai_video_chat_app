import { Router } from 'express';

export const userRouter = Router();

userRouter.post("/", (req, res) => {
  res.send(200);
});