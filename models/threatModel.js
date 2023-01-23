import mongoose from "mongoose";

const threatSchema = mongoose.Schema({
  title: String,
  shortDesc: String,
  city: String,
  threatLevel: {
    type: String,
    enum: ["low", "middle", "high"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  lon: Number,
  lat: Number,
});

export const Threat = mongoose.model("Threat", threatSchema);
