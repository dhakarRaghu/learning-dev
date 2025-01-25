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

export const Url = mongoose.model('Url', UrlSchema);
