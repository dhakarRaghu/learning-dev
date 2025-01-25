"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const connection_1 = require("./db/connection");
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(errorMiddleware_1.errorHandler);
dotenv_1.default.config(); // so that we can use process.env to access environment variables
app.use("/api", routes_1.appRouter);
const PORT = 5001;
(0, connection_1.connectToDatabase)()
    .then(() => {
    app.listen(PORT, () => console.log("Server is running on port " + PORT));
});
