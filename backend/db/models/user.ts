import {model, Schema} from 'mongoose';

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String}, // Password is not required for OAuth users
    googleId: {type: String}, // Google ID for OAuth users
    },
    {timestamps: true}
);