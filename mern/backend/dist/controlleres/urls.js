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
exports.GenerateShortUrl = GenerateShortUrl;
exports.GetVisited = GetVisited;
const user_1 = require("../models/user");
const nanoid_1 = require("nanoid");
// Generate Short URL
function GenerateShortUrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shortId = (0, nanoid_1.nanoid)(8); // Generate a unique short URL ID
            const { url } = req.body;
            if (!url) {
                res.status(400).json({ message: 'URL is required' });
                return;
            }
            // Create a new URL document
            yield user_1.Url.create({
                short_url: shortId, // Ensure this matches the schema
                redirect_url: url,
                visitHistory: [],
            });
            const fullShortUrl = `${req.protocol}://${req.get('host')}/api/shorturl/${shortId}`;
            res.json({ id: shortId, shortUrl: fullShortUrl, message: 'Short URL generated successfully' });
        }
        catch (error) {
            next(error); // Pass errors to error-handling middleware
        }
    });
}
// Handle Redirection and Visit Logging
function GetVisited(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { shortId } = req.params;
            console.log(shortId);
            const entry = yield user_1.Url.findOneAndUpdate({ short_url: shortId }, {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            }, { new: true });
            if (entry) {
                res.redirect(entry.redirect_url);
                console.log(entry.redirect_url);
            }
            else {
                res.status(404).json({ message: 'Short URL not found' });
            }
        }
        catch (error) {
            next(error); // Pass the error to the error-handling middleware
        }
    });
}
