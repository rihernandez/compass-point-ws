import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRoutes from "./routes/users.route";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", userRoutes);

export default app;