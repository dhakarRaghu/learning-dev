// const express = require("express");
// const app = express();

// app.get("/health-checkup", function(req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = parseInt(req.query.kidneyId, 10); // Parse kidneyId as an integer

//     if (username !== "raghu" || password !== "1234") {
//         res.status(400).json({ "msg": "Invalid username or password" });
//         return;
//     }

//     if (kidneyId !== 1 && kidneyId !== 2) {
//         res.status(400).json({ "msg": "Invalid kidney ID" });
//         return;
//     }

//     res.json({ "msg": "your code is copied" });
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
const express = require("express");
const app = express();

// Middleware for user validation
function userMiddleware(req, res, next) {
    const { username, password } = req.headers;

    if (username !== "raghu" || password !== "1234") {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    } else {
        next();
    }
}

// Middleware for kidney ID validation
function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId, 10);

    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    } else {
        next();
    }
}

// Route with both middlewares applied
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    // Do something 
    res.send("Your heart is healthy");
});

// any exception  /// GLOBAL ERROR CHECK
app.use(function(err , req, res , next){
    res.json({
        msg: "sorry something is up to server"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
