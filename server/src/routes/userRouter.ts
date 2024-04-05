import { Router, Request, Response } from 'express';

export const userRouter = Router();

import { searchAllFriends, addFriendToList } from '../controllers/userController';

userRouter.post("/searchForFriends", searchAllFriends, (_req: Request, res: Response) => {
  res.status(200).json(res.locals.friends);
});

userRouter.patch("/addFriendToList", addFriendToList, (_req: Request, res: Response) => {
  res.sendStatus(200);
})