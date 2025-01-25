import { Router } from 'express';
import { CreateUser, GetAllUser } from '../controlleres/Users';

const userRoutes = Router();

userRoutes.post('/', CreateUser);
userRoutes.get('/getall', GetAllUser);

export { userRoutes };
