const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(cors);

app.get("/todo", async function (req, res) {
    try {
        const todos = await todo.find({}); // Fix: Correct variable usage
        res.json({
            msg: "Todo fetched",
            todos, // Return fetched todos
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error fetching todos",
            error,
        });
    }
});

app.post("/todo", async function (req, res) {
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You have sent wrong input",
        });
        return;
    }

    try {
        await todo.create({
            title: createPayLoad.title, 
            description: createPayLoad.description,
            completed: false,
        });
        res.json({
            msg: "Todo is created",
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error creating todo",
            error:error
        });
    }
});

app.put("/completed", async function (req, res) {
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "You have sent wrong input",
        });
        return;
    }

    try {
        await todo.updateOne(
            { _id: req.body.id }, // Correct usage of update method
            { completed: true }
        );
        res.json({
            msg: "Todo is updated",
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error updating todo",
            error,
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
