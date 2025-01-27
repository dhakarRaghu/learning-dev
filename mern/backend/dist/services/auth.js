"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function generateToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
        image: user.image,
        blogs: user.blogs,
    };
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: '7D' });
}
function verifyToken(token) {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
}
