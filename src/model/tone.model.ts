import mongoose from "mongoose";

const toneSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    conspiracyId: { type: mongoose.Schema.Types.ObjectId, ref: "conspiracy" },
});

export const tone = mongoose.model("tone", toneSchema)