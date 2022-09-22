import { config } from "./config/config";
import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes";
import { paletteRouter } from "./routes/palette.routes";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth.routes";
import { profileRouter } from "./routes/profile.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use(".profiles", profileRouter);
app.use("/palettes", paletteRouter);

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Connected to MongoDB"));

const port = config.port;

app.listen(port, () => console.log(`Listening on port: ${port}`));
