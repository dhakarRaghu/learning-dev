const express = require("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());

app.get("/todo" , function(req , res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    
    if(!parsePayLoad.success){
        res.status(411).json({
            msg : "you have sent wrong input",
        })

        return ;
    }
})
app.post("/todo" , function(req , res){

})

app.put("/completed" , function(req , res){

})