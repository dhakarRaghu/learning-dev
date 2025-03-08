const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send("Welcome to LearnCodeonline server");
});

app.get('/get', (req, res) => {
  res.status(200).json({ message: "Hello from learnCodeonline.in" });
});

app.post('/post', (req, res) => {
  let myJson = req.body;
  res.status(200).send(myJson);
});

app.post('/postform', (req, res) => {
  res.status(200).send(JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const adminRouter = require("./routes/admin")
// const userRouter = require("./routes/user");

// // Middleware for parsing request bodies
// app.use(bodyParser.json());
// app.use("/admin", adminRouter)
// app.use("/user", userRouter)

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });