import mongoose from "mongoose";

const genereSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    conspiracyId: { type: mongoose.Schema.Types.ObjectId, ref: "conspiracy" },
});

export const genere = mongoose.model("genere", genereSchema)