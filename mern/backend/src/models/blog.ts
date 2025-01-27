import mongoose from "mongoose";
import { randomUUID } from "crypto";

const blogSchema = new mongoose.Schema({
    id : {type: String, default: randomUUID},
    title : {
        type : String,
        require : true,
    },
    description :{
        type : String,
    },
    author : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now
    },
})

const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image : {
        type : String,
        default : './uploads/default.jpg'
    },
    blogs : [blogSchema]
});

const Blog = mongoose.model('Blog', blogSchema);
const Users = mongoose.model('User', userSchema);

export {Blog, Users}