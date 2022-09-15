import { model, Schema } from "mongoose";
import { Palette } from "../types/palette.types";

const paletteSchema = new Schema<Palette>({
  _id: { type: String },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  textColor: { type: String },
  primaryColor: { type: String },
  secondaryColor: { type: String },
  tertiaryColor: { type: String },
});

export const paletteModel = model<Palette>("Palette", paletteSchema);
