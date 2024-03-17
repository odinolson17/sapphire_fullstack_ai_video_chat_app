import dotenv from 'dotenv';
dotenv.config();

import { Request, Response, NextFunction } from 'express';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

export async function createMessage (req: Request, res: Response, next: NextFunction) {
  try {
    console.log("Now inside");
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a friend. '
        },
        {
          role: 'user',
          content: req.body.message
        }
      ],
      model: 'gpt-3.5-turbo',
      temperature: 1,
      max_tokens: 120,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.locals.result = chatCompletion;
    console.log(res.locals.result);
    return next();
  } catch (err) {
    console.log({err});
    return next({
      log: 'There was an error connecting to open ai',
      message: "There was an error connecting to open ai."
    });
  }
};