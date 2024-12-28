import mongoose from "mongoose";

const timeframeSchema = new mongoose.Schema({
    startYear: { type: Number, required: true },
    endYear: { type: Number, required: true },
    era: { type: String },
    conspiracyId: { type: mongoose.Schema.Types.ObjectId, ref: "conspiracy" },
});

export const timeframe = mongoose.model("timeframe", timeframeSchema) 