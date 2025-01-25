import  { Router } from 'express';

const todoRoutes = Router();

todoRoutes.get('/', (req, res) => {
    res.send('todo : Hello World');
});

export { todoRoutes };