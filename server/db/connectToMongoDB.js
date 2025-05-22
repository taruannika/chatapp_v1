import mongoose from "mongoose";
import { MONGO_URI } from "../utils/config.js";
import { errorLog, successLog } from "../utils/logger.js";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    successLog("Connected to MongoDB");
  } catch (err) {
    errorLog("Error connecting to MongoDB", err.message);
    process.exit(1);
  }
};
