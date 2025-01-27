import { NextFunction, Request, Response } from "express";
import { Blog } from "../models/blog";

export async function getBlogs(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        next(error);
    }
}

export async function createBlog(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
       const {title , description} = req.body;
        const res = Blog.create({
                title ,
                description ,
       });

    } catch (error) {
        next(error);
    }
}