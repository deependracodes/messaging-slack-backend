import express from 'express';

import { getChannelByIdController } from '../../../controllers/channel.controller.js';
import { auth } from '../../../middlewares/auth.middleware.js';

const channelRouter = express.Router();

channelRouter.get('/:channelId', auth, getChannelByIdController);

export default channelRouter;
