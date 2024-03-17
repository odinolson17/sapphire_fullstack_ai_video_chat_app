import { Request, Response, NextFunction } from 'express';
import { User } from '../model/User';

export async function createUser (req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.create({
      'name': req.body.name,
      'email': req.body.email,
      'password': req.body.password
    });
    res.locals.user = user;
    return next();
  } catch (err) {
    console.log({err});
    return next({
      log: 'There was an error creating user.',
      message: "There was an error creating a user."
    })
  }
};

export async function findUser (req: Request, res: Response, next: NextFunction) {
  try {
    const userQuery = await User.findOne({
      'email': req.body.email
    });
    res.locals.user = userQuery;
    return next();
  } catch (err) {
    console.log({err});
    return next({
      log: 'There was an error finding user or user does not exist.',
      message: "There was an error finding user or user does not exist."
    })
  }
};
