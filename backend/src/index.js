import cors from 'cors';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import connectDB from './config/db.config.js';
import { PORT } from './config/server.config.js';
import apiRouter from './routes/api.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', apiRouter);

app.get('/ping', (_req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'pong!'
  });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log('server listening on port : ', PORT);
});
