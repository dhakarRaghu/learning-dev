import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    image: string;
    blogs: [];
}

export function generateToken(user: User) {
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
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7D' });
}


export function verifyToken(token: string) {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.verify(token, process.env.JWT_SECRET);
}


