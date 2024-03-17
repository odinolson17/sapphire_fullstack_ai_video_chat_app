import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response, ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';
dotenv.config();

const app: Express = express();
const port: number = 5555;

const mongoURI: string = 'mongodb://127.0.0.1:27017/sapphireApp'; // switch later
mongoose.connect(mongoURI);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ai routes:
import { aiRouter } from './routes/aiRouter';
app.use("/api/aiRouter", aiRouter);

// login routes:
import { loginRouter } from './routes/loginRouter';
app.use("/api/loginRouter", loginRouter);

// user routes:
import { userRouter } from './routes/userRouter';
app.use("/api/userRouter", userRouter);

// errors:
app.get('*', (_req: Request, res: Response) => {
  res.status(404).send('404')
});

app.use(((err, _req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
}) as ErrorRequestHandler);

// app listening:
app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});