import dotenv from 'dotenv';
import { Router, Request, Response } from 'express';
dotenv.config();

export const aiRouter = Router();

// middleware functions imported
import { createMessage } from '../controllers/aiController';

// requests
aiRouter.post("/createMessage", createMessage, (_req: Request, res: Response) => {
  res.status(200).json(res.locals.result);
});