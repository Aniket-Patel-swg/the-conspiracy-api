import mongoose from "mongoose";

const entitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    conspiracyId: { type: mongoose.Schema.Types.ObjectId, ref: "conspiracy" },
});

export const entity = mongoose.model("entity", entitySchema)