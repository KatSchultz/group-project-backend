import express from "express";
import {
  getPalettes,
  addPalette,
  getPalette,
  updatePalette,
  deletePalette,
} from "../controllers/palette.controller";

export const paletteRouter = express.Router();

paletteRouter.route("/").get(getPalettes).post(addPalette);

paletteRouter
  .route("/:id")
  .get(getPalette)
  .patch(updatePalette)
  .delete(deletePalette);
