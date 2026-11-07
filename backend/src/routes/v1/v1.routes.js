import express from 'express';

import userRouter from './user/user.route.js';

const v1Router = express.Router();

v1Router.use('/users', userRouter);

export default v1Router;
