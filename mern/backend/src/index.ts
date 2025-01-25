import express from 'express';
import { appRouter } from './routes';
import { connectToDatabase } from './db/connection';
import { errorHandler } from './middleware/errorMiddleware';

const app = express();
app.use(express.json());
app.use(errorHandler)

app.use("/api", appRouter);

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

const PORT = 5001;
connectToDatabase()
.then(() => {
    app.listen(PORT, () =>
    console.log("Server is running on port " + PORT));
})