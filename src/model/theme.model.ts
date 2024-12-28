import mongoose from "mongoose";

const themeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    conspiracyId: { type: mongoose.Schema.Types.ObjectId, ref: "conspiracy" },
});

export const theme = mongoose.model("theme", themeSchema)