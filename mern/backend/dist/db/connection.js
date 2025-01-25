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
exports.connectToDatabase = connectToDatabase;
exports.disconnectFromDatabase = disconnectFromDatabase;
const mongoose_1 = require("mongoose");
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mon_url = process.env.MONGODB_URL;
            yield (0, mongoose_1.connect)(mon_url);
            console.log('Connected to the database');
        }
        catch (error) {
            console.log(error);
            throw new Error('Error connecting to the database');
        }
    });
}
function disconnectFromDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // if (!process.env.MONGODB_URL) {
            //     throw new Error('MONGODB_URL is not defined');
            // }
            yield (0, mongoose_1.disconnect)();
            console.log('Disconnected from the database');
        }
        catch (error) {
            console.log(error);
            throw new Error('Error disconnecting from the database');
        }
    });
}
