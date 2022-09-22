import { paletteModel } from "../models/palette.model";
import { Palette } from "../types/palette.types";

async function getPalettes() {
  const palettes = await paletteModel.find();
  return palettes;
}

async function getPalette(id: string) {
  const palette = await paletteModel.findById(id);
  return palette;
}

async function getPalettesByUid(uid: string) {
  const palette = await paletteModel.find({ uid }).lean();
  return palette;
}

async function getPaletteByUid(uid: string) {
  const palette = await paletteModel.findOne({ uid }).lean();
  return palette;
}

async function addPalette(data: Partial<Palette>) {
  const newPalette = await paletteModel.create(data);
  return newPalette;
}

async function updatePalette(id: string, data: Partial<Palette>) {
  const updatedPalette = await paletteModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedPalette;
}

async function deletePalette(id: string) {
  return await paletteModel.findByIdAndDelete(id);
}

export const PalettesService = {
  getPalettes,
  getPalette,
  getPalettesByUid,
  getPaletteByUid,
  addPalette,
  updatePalette,
  deletePalette,
};
