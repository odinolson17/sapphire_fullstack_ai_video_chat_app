import { Router, Request, Response } from 'express';

export const userRouter = Router();

import { searchAllFriends } from '../controllers/userController';

userRouter.post("/searchForFriends", searchAllFriends, (_req: Request, res: Response) => {
  res.status(200).json(res.locals.friends);
});