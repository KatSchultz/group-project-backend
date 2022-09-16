import { model, Schema } from "mongoose";
import { Palette } from "../types/palette.types";

const paletteSchema = new Schema<Palette>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  textColor: { type: String, required: true },
  primaryColor: { type: String, required: true },
  secondaryColor: { type: String },
  tertiaryColor: { type: String },
  fourthColor: { type: String },
  fifthColor: { type: String },
  sixthColor: { type: String },
  imgUrl: { type: String },
});

export const paletteModel = model<Palette>("Palette", paletteSchema);
