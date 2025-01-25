import express from 'express';
import { userRoutes } from './user';
import { todoRoutes } from './todo';

const appRouter = express.Router();

appRouter.use('/user', userRoutes);
appRouter.use('/todo', todoRoutes);

export { appRouter };