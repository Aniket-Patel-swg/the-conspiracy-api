import mongoose from "mongoose";

const conspiracySchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    complexity: { type: Number },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    
    
}, { timestamps: true });

export const conspiracy = mongoose.model("conspiracy", conspiracySchema)
