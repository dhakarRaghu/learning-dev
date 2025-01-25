import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";

export async function CreateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const {username , email , password} = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }
        await User.create({
            username , 
            email,
            password,
        })
        res.json({ message: 'User created successfully' });
    } catch (error) {
        next(error); 
    }
}

export async function GetAllUser(_: Request, res: Response, next: NextFunction): Promise<void> {
    // res.json({ message: 'Hello World' });
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        next(error); 
    }
}