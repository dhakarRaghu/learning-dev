const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:dhakad123@cluster0.oa9dc.mongodb.net/');

const AdminSchema = new mongoose.Schema({
    username: String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,

    purchasedCourses: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description: String ,
    imageLink : String ,
    price: Number
});

const Admin = mongoose.model('Admin' , AdminSchema);
const User  =   mongoose.model('User',UserSchema);
const Course = mongoose.model('Couse' , CourseSchema);

module.exports = {
    Admin, 
    User,
    Course
}
