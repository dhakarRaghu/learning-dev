"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = require("express");
const blog_1 = require("../controlleres/blog");
const blogRoutes = (0, express_1.Router)();
exports.blogRoutes = blogRoutes;
blogRoutes.get('/', blog_1.getBlogs);
blogRoutes.post('/create', blog_1.createBlog);
