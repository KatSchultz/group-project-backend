import express from "express";
import {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(addUser);

userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
