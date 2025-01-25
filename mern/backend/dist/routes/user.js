"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const Users_1 = require("../controlleres/Users");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post('/', Users_1.CreateUser);
userRoutes.get('/getall', Users_1.GetAllUser);
