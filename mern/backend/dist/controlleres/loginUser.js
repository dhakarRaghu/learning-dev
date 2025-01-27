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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = userLogin;
exports.userSignup = userSignup;
const blog_1 = require("../models/blog");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function userLogin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield blog_1.Users.findOne({ email });
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            // Check password
            // const isPasswordValid = await bcrypt.compare(password, user.password);
            const isPasswordValid = password === user.password;
            if (!isPasswordValid) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, // Payload
            process.env.JWT_SECRET, // Secret key
            { expiresIn: '7d' } // Token expiry
            );
            res.cookie('token', token, {
                httpOnly: true, // Prevent client-side JS access
                secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
                sameSite: 'strict', // Protect against CSRF
                path: '/', // Available site-wide
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });
            res.status(200).json({ message: 'Login in blog successful', token });
        }
        catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
function userSignup(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, password } = req.body;
            const user = yield blog_1.Users.create({
                username,
                email,
                password,
            });
            res.json({ user, message: "User blog created successfully" });
        }
        catch (error) {
            next(error);
        }
    });
}
