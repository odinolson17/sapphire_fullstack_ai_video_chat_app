import { Router } from 'express';

export const loginRouter = Router();

loginRouter.post("/", (req, res) => {
  res.send(200);
});