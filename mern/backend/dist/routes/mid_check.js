"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = authenticateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticateToken(req, res, next) {
    var _a;
    const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token; // Get the token from cookies
    if (!token) {
        res.status(401).json({ message: 'Unauthorized: Token is missing' });
        return;
    }
    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jsonwebtoken_1.default.verify(token, secret); // Verify the token
        req.user = decoded; // Attach user info to the request object
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
    }
}
