import express from 'express';

import {
  getMessages,
  getPresignedUrlFromAWS
} from '../../../controllers/message.controller.js';
import { auth } from '../../../middlewares/auth.middleware.js';

const messageRouter = express.Router();

messageRouter.get('/pre-signed-url', auth, getPresignedUrlFromAWS);
messageRouter.get('/:channelId', auth, getMessages);

export default messageRouter;
