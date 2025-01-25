import express from 'express';
import { appRouter } from './routes';

const app = express();
app.use(express.json());

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

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
