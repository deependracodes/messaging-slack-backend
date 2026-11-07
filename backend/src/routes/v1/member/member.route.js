import express from 'express';

import { isMemberPartOfWorkspaceController } from '../../../controllers/member.controller.js';
import { auth } from '../../../middlewares/auth.middleware.js';

const memberRouter = express.Router();

memberRouter.get(
  '/workspace/:workspace',
  auth,
  isMemberPartOfWorkspaceController
);

export default memberRouter;
