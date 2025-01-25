import { Router } from 'express';
import { allUrls, GenerateShortUrl, GetVisited } from '../controlleres/urls';


const urlRoutes = Router();

urlRoutes.get('/allUrls', allUrls);
urlRoutes.post('/', GenerateShortUrl);
urlRoutes.get('/:shortId', GetVisited);

export { urlRoutes };
