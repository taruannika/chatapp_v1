import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { NODE_ENV, PORT } from "./utils/config.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";
import { successLog } from "./utils/logger.js";
import { errorhandler } from "./middlewares/errorhandler.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

if (NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use(errorhandler);

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    successLog(`Server running at port ${PORT}`);
  });
});
