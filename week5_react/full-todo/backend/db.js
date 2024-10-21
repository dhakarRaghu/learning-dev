const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://admin:dhakad123@cluster0.oa9dc.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed:Boolean
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}