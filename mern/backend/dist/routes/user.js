"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.get('/', (req, res) => {
    res.send('Hello World');
});
