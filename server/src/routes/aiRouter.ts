import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';export const aiRouter = Router();

import { createMessage } from '../controllers/aiController';

aiRouter.post("/createMessage", createMessage, (req, res) => {
  res.send(200).json(res.locals.result);
});