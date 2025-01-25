"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routes_1.appRouter);
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// app.post('/user', (req, res) => {
//     const name = req.body.name;
//   res.send('User created : ' + name);
//     // res.send({status :'User created'});
// });
// app.post('/user/:id', (req, res) => {
//   res.send('Hello World ' + req.params.id);
// });
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
