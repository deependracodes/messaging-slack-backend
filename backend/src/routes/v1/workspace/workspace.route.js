import express from 'express';

import {
  addChannelToWorkspaceController,
  addMemberToWorkspaceController,
  createWorkspaceController,
  deleteWorkspaceController,
  getWorkspaceByJoinCodeController,
  getWorkspaceController,
  getWorkspacesUserIsMemberOfController,
  joinWorkspaceController,
  resetJoinCodeController,
  updateWorkspaceController
} from '../../../controllers/workspace.controller.js';

import { auth } from '../../../middlewares/auth.middleware.js';
import {
  addChannelToWorkspaceSchema,
  addMemberToWorkspaceSchema,
  createWorkspaceSchema
} from '../../../validators/workspace.schema.js';

import { validate } from '../../../validators/zod.validator.js';

const workspaceRouter = express.Router();

workspaceRouter.post(
  '/',
  auth,
  validate(createWorkspaceSchema),
  createWorkspaceController
);

workspaceRouter.get('/', auth, getWorkspacesUserIsMemberOfController);

workspaceRouter.delete('/:workspaceId', auth, deleteWorkspaceController);

workspaceRouter.get('/:workspaceId', auth, getWorkspaceController);

workspaceRouter.get(
  '/join/:joinCode',
  auth,
  getWorkspaceByJoinCodeController
);

workspaceRouter.put('/:workspaceId/join', auth, joinWorkspaceController);

workspaceRouter.put('/:workspaceId', auth, updateWorkspaceController);

workspaceRouter.put(
  '/:workspaceId/members',
  auth,
  validate(addMemberToWorkspaceSchema),
  addMemberToWorkspaceController
);

workspaceRouter.put(
  '/:workspaceId/channels',
  auth,
  validate(addChannelToWorkspaceSchema),
  addChannelToWorkspaceController
);

workspaceRouter.put(
  '/:workspaceId/joinCode/reset',
  auth,
  resetJoinCodeController
);

export default workspaceRouter;
