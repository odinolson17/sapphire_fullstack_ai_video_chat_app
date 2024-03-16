import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

export async function createMessage (req: Request, res: Response, next: NextFunction) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{
          role: 'system',
          content: req.body.message
      }],
      model: 'gpt-3.5-turbo'
    });
    res.locals.result = chatCompletion;
    return next();
  } catch {
    return next({
      log: 'There was an error connecting to open ai',
      message: "There was an error connecting to open ai."
    });
  }
};