import cors from 'cors';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import bullServerAdapter from './config/bull.board.config.js';
import connectDB from './config/db.config.js';
import { PORT } from './config/server.config.js';
import apiRouter from './routes/api.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/ping', (_req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'pong!'
  });
});

app.use('/api', apiRouter);

app.use('/ui', bullServerAdapter.getRouter());

app.listen(PORT, async () => {
  await connectDB();
  console.log('server listening on port : ', PORT);
});
