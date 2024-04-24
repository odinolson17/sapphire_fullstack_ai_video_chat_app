import { checkForContact } from './functions/checkForContact';
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
          "friendspicture": req.body.profilepic,
          "roomid": req.body.roomid
        }
      }
    };
    const checkingIfAlreadyExist: any = await User.findOne(toFind);
    if (checkingIfAlreadyExist) {
      const result = checkForContact(checkingIfAlreadyExist, req.body.friendsemail);
      if (result) {
        return next();
      } else {
        await User.findOneAndUpdate(toFind, toUpdate);
        return next();
      }
    } else {
      return next();
    }
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

export async function addToMessagesArray (req: Request, res: Response, next: NextFunction) {
  const { roomid, name, message, time, chatid, email } = req.body;
  try {
    const toFind = {
      "email": email,
      "textchats": {
        "$elemMatch": {
          "roomid": roomid
        }
      }
    };
    const toUpdate = {
      "$push": {
        "textchats.$.chats": {
          "name": name,
          "time": time,
          "message": message,
          "chatid": chatid
        }
      }
    }
    await User.findOneAndUpdate(toFind, toUpdate);
    const response = await User.findOne(toFind);
    res.locals.message = response;
    return next();
  } catch (err) {
    console.log({err});
    return next({
      log: "There was an error adding to the message array.",
      message: "There was an error adding to the message array."
    })
  }
};

export async function grabMessages (req: Request, res: Response, next: NextFunction) {
  const { roomid, email } = req.body;
  try {
    const toFind = {
      "email": email,
      "textchats": {
        "$elemMatch": {
          "roomid": roomid
        }
      }
    };
    const response = await User.findOne(toFind);
    res.locals.messages = response;
    return next();
  } catch (err) {
    console.log({err});
    return next({
      log: "There was an error adding grabbing these messages.",
      message: "There was an error adding grabbing these messages."
    })
  }
};