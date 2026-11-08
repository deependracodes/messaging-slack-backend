import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { StatusCodes } from 'http-status-codes';
import { Server } from 'socket.io';

import bullServerAdapter from './config/bull.board.config.js';
import connectDB from './config/db.config.js';
import { PORT } from './config/server.config.js';
import ChannelSocketHandlers from './controllers/channel.socket.controller.js';
import MessageSocketHandlers from './controllers/message.socket.controller.js';
import apiRouter from './routes/api.routes.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

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

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  // socket.on('messageFromClient', (data) => {
  //   console.log('Message from client', data);

  //   io.emit('new message', data.toUpperCase()); // broasdcast
  // });
  MessageSocketHandlers(io, socket);
  ChannelSocketHandlers(io, socket);
});

server.listen(PORT, async () => {
  await connectDB();
  console.log('server listening on port : ', PORT);
});
