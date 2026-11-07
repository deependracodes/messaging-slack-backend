import express from 'express';

import userRouter from './user/user.route.js';
import workspaceRouter from './workspace/workspace.route.js';
import channelRouter from './channel/channel.route.js';
import memberRouter from './member/member.route.js';
import messageRouter from './message/message.route.js';

const v1Router = express.Router();

v1Router.use('/users', userRouter);

v1Router.use('/workspaces', workspaceRouter);

v1Router.use('/channels', channelRouter);

v1Router.use('/members', memberRouter);

v1Router.use('/messages', messageRouter);

export default v1Router;
