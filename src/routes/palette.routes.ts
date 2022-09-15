import express from "express";
import {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

export const paletteRouter = express.Router();

paletteRouter.route("/").get(getPalettes).post(addPalette);

paletteRouter
  .route("/:id")
  .get(getPalette)
  .patch(updatePalette)
  .delete(deletePalette);
