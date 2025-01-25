import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
    res.send('Hello World');
});

export { userRoutes };
