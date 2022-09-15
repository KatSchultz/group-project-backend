import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  mongoURI: process.env.MONGO_URI as string,
  port: 3000,
};
