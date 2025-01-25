import mongoose, { Schema } from 'mongoose';

const UrlSchema = new Schema({
    short_url: {
        type: String,
        required: true,
        unique: true,
    },
    redirect_url: {
        type: String,
        required: true,
    },
    visitHistory: [
        {
            timestamp: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
   password : {
        type : String,
        required : true
   }
});

const Url = mongoose.model('Url', UrlSchema);
const User = mongoose.model('user', userSchema);

export {Url , User}
