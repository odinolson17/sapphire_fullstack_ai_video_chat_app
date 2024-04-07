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
      log: "There was an error looking for users.",
      message: "There was an error looking for users."
    })
  }
};

export async function addFriendToList (req: Request, _res: Response, next: NextFunction) {
  try {
    const toFind = {"email": req.body.currentUser};
    const toUpdate = {
      "$push": {
        "textchats": {
          "friendsname": req.body.friendsname,
          "friendsemail": req.body.friendsemail,
          "roomid": req.body.roomid
        }
      }
    };
    await User.findOneAndUpdate(toFind, toUpdate);
    return next();
  } catch (err) {
    console.log({err});
    return next({
      log: "There was an error adding friends as contacts.",
      message: "There was an error adding friends as contacts."
    })
  }
};

export async function addProfilePicture (req: Request, _res: Response, next: NextFunction) {
  const { url, email } = req.body;
  try {
    const toFind = { "email": email };
    const toUpdate = { "profilepic": url };
    await User.findOneAndUpdate(toFind, toUpdate);
    return next();
  } catch (err) {
    console.log({err});
    return next({
      log: "There was an error adding a profile picture.",
      message: "There was an error adding a profile picture."
    })
  }
};