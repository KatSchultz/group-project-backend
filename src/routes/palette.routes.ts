import express from "express";
import {
  getPalettes,
  addPalette,
  getPalette,
  updatePalette,
  deletePalette,
  getPalettesByUid,
} from "../controllers/palette.controller";

export const paletteRouter = express.Router();

paletteRouter.route("/").get(getPalettesByUid).post(addPalette);

paletteRouter
  .route("/:id")
  .get(getPalette)
  .patch(updatePalette)
  .delete(deletePalette);
