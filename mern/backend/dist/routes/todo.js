"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoutes = void 0;
const express_1 = require("express");
const todoRoutes = (0, express_1.Router)();
exports.todoRoutes = todoRoutes;
todoRoutes.get('/', (req, res) => {
    res.send('todo : Hello World');
});
