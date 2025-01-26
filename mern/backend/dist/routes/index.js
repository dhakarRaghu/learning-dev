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
const multer_1 = __importDefault(require("multer")); // for storing files
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const appRouter = express_1.default.Router();
exports.appRouter = appRouter;
appRouter.use('/user', User_1.userRoutes);
appRouter.use('/todo', todo_1.todoRoutes);
appRouter.use('/shorturl', url_1.urlRoutes);
appRouter.post('/upload', upload.single('file'), (req, res) => {
    try {
        console.log('File uploaded:', req.file);
        res.json({
            message: 'File uploaded successfully',
            file: req.file,
        });
    }
    catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'File upload failed', error });
    }
});
