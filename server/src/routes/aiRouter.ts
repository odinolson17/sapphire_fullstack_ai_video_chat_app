import dotenv from 'dotenv';
dotenv.config();

import { Router, Request, Response } from 'express';export const aiRouter = Router();

import { createMessage } from '../controllers/aiController';

aiRouter.post("/createMessage", createMessage, (_req: Request, res: Response) => {
  res.send(200).json(res.locals.result);
});