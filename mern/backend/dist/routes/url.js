"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRoutes = void 0;
const express_1 = require("express");
const urls_1 = require("../controlleres/urls");
const urlRoutes = (0, express_1.Router)();
exports.urlRoutes = urlRoutes;
urlRoutes.post('/', urls_1.GenerateShortUrl);
urlRoutes.get('/:shortId', urls_1.GetVisited);
