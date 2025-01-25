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
exports.CreateUser = CreateUser;
exports.GetAllUser = GetAllUser;
const user_1 = require("../models/user");
function CreateUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, password } = req.body;
            if (!username || !email || !password) {
                res.status(400).json({ message: 'All fields are required' });
                return;
            }
            yield user_1.User.create({
                username,
                email,
                password,
            });
            res.json({ message: 'User created successfully' });
        }
        catch (error) {
            next(error);
        }
    });
}
function GetAllUser(_, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // res.json({ message: 'Hello World' });
        try {
            const users = yield user_1.User.find();
            res.json(users);
        }
        catch (error) {
            next(error);
        }
    });
}
