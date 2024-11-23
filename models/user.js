import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        rquired: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        minLength: 10
    },
    isAdmin: {
        type: Boolean,
        default: false
    } 
}, { timestamps: true });


const User =  mongoose.models.User || mongoose.model("User", userSchema);
export default User;