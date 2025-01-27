import { Request, Response, NextFunction } from "express";

declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}
import jwt from 'jsonwebtoken';

interface user {
    _id: string;
    username: string;
    email: string;
    password: string;
    image: string;
    blogs: [];
}

export function authenticateToken(req: Request, res: Response, next: NextFunction): void {
    const token = req.cookies?.token; // Get the token from cookies

    if (!token) {
        res.status(401).json({ message: 'Unauthorized: Token is missing' });
        return;
    }

    try {
        const secret = process.env.JWT_SECRET as string;
        const decoded = jwt.verify(token, secret); // Verify the token
        req.user = decoded; // Attach user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
    }
}
