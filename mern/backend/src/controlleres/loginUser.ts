import { NextFunction, Request, Response } from "express";
import { Users } from "../models/blog";
import jwt from 'jsonwebtoken';
import { generateToken } from "../services/auth";

export async function userLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const {email, password} = req.body;
        const user = await Users.findOne({ email });
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
        const token = jwt.sign(
            { id: user._id, email: user.email }, // Payload
             process.env.JWT_SECRET as string, // Secret key
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

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function userSignup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const {username, email, password} = req.body;
        const user = await Users.create({
            username,
            email,
            password,
        });
        res.json({ user, message: "User blog created successfully" });
    } catch (error) {
        next(error);
    }
}