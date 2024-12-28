import mongoose from "mongoose";

const evidenceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    conspiracyId: { type: mongoose.Schema.Types.ObjectId, ref: "conspiracy" },
});

export const evidence = mongoose.model("evidence", evidenceSchema)
