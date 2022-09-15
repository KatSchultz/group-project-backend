import { Request, Response } from "express";
import { PalettesService } from "../services/palette.service";

export async function getPalettes(req: Request, res: Response) {
  try {
    const palettes = await PalettesService.getPalettes();
    return res.status(200).json(palettes);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getPalette(req: Request, res: Response) {
  try {
    const palette = PalettesService.getPalette(req.params.id);
    if (!palette) return res.status(404).json("Palette not found");
    return res.status(200).json(palette);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addPalette(req: Request, res: Response) {
  try {
    const newPalette = PalettesService.addPalette(req.body);
    return res.status(201).json(newPalette);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function updatePalette(req: Request, res: Response) {
  try {
    const updatedPalette = await PalettesService.updatePalette(
      req.params.id,
      req.body
    );
    return res.status(200).json(updatedPalette);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function deletePalette(req: Request, res: Response) {
  try {
    await PalettesService.deletePalette(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
