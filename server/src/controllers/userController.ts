import { Request, Response, NextFunction } from 'express';
import { User } from '../model/User';

export async function searchAllFriends (req: Request, res: Response, next: NextFunction) {
  try {
    const search = await User.find({
      name: {"$regex": req.body.currentSearch } 
    });
    res.locals.friends = search;
    return next();
  } catch (err) {
    console.log({err});
    return next({
      log: 'There was an error looking for users.',
      message: "There was an error looking for users."
    })
  }
};