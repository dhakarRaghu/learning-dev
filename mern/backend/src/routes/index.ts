import express from 'express';
import { userRoutes } from './User';
import { todoRoutes } from './todo';
import { urlRoutes } from './url';

const appRouter = express.Router();

appRouter.use('/user', userRoutes);
appRouter.use('/todo', todoRoutes);
appRouter.use('/shorturl', urlRoutes);

export { appRouter };