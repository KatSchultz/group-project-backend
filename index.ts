import express from "express";
import cors from "cors";
import { userRouter } from "./src/routes/user.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);

app.use("/saved-palettes");

const port = 3000;

app.listen(port, console.log(`Listening on port: ${port}`));
