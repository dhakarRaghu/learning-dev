"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.Blog = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const crypto_1 = require("crypto");
const blogSchema = new mongoose_1.default.Schema({
    id: { type: String, default: crypto_1.randomUUID },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: './uploads/default.jpg'
    },
    blogs: [blogSchema]
});
const Blog = mongoose_1.default.model('Blog', blogSchema);
exports.Blog = Blog;
const Users = mongoose_1.default.model('User', userSchema);
exports.Users = Users;
