"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogs = getBlogs;
exports.createBlog = createBlog;
const blog_1 = require("../models/blog");
function getBlogs(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const blogs = yield blog_1.Blog.find();
            res.json(blogs);
        }
        catch (error) {
            next(error);
        }
    });
}
function createBlog(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, description } = req.body;
            const res = blog_1.Blog.create({
                title,
                description,
            });
        }
        catch (error) {
            next(error);
        }
    });
}
