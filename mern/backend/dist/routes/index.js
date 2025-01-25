"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = require("./User");
const todo_1 = require("./todo");
const url_1 = require("./url");
const appRouter = express_1.default.Router();
exports.appRouter = appRouter;
appRouter.use('/user', User_1.userRoutes);
appRouter.use('/todo', todo_1.todoRoutes);
appRouter.use('/shorturl', url_1.urlRoutes);
