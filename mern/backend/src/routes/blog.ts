import  { Router } from 'express';
import { createBlog, getBlogs } from '../controlleres/blog';
const blogRoutes = Router();

blogRoutes.get('/', getBlogs);
blogRoutes.post('/create', createBlog);
// blogRoutes.put('/create', putBlog);
// blogRoutes.delete('/create', deleteBlog);

export { blogRoutes };