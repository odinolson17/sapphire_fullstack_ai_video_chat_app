import { Router, Request, Response } from 'express';
export const loginRouter = Router();
import {
  createUser,
  findContact,
  findUser
} from '../controllers/loginController';

loginRouter.post("/createUser", createUser, (_req: Request, res: Response) => {
  res.status(200).json(res.locals.user);
});

loginRouter.post("/findUser", findUser, (_req: Request, res: Response) => {
  res.status(200).json(res.locals.user);
});

loginRouter.post("/findContact", findContact, (_req: Request, res: Response) => {
  res.status(200).json(res.locals.user);
});