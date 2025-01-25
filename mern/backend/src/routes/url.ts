import { Router } from 'express';
import { GenerateShortUrl, GetVisited } from '../controlleres/urls';


const urlRoutes = Router();

urlRoutes.post('/', GenerateShortUrl);
urlRoutes.get('/:shortId', GetVisited);

export { urlRoutes };
