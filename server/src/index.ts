import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter, cableSubscriptionRouter, dataRouter } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

//Routes
app.use("/api/auth", authRouter);
app.use("/api/data", dataRouter);
app.use("/api/cable-subscription", cableSubscriptionRouter); // Assuming cable routes are handled by the same router as data
// app.use("/api/user", userRouter);

//Server Test
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
