import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from 'body-parser';



import userRoutes from "./routes/users.route";
import chargeRoutes from "./routes/charge.route";
import familyRoutes from "./routes/family.route";
import billRoutes from "./routes/bill.route";
import studentRoutes from "./routes/student.route";
import roleRoutes from "./routes/role.route";
import formRoutes from "./routes/form.router";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", chargeRoutes);
app.use("/api/v1", familyRoutes);
app.use("/api/v1", billRoutes);
app.use("/api/v1", studentRoutes);
app.use("/api/v1", roleRoutes);
app.use("/api/v1", formRoutes);

export default app;