import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    lastActive: { type: Date, default: Date.now },
}, { timestamps: true });

export const user = mongoose.model("user", userSchema)