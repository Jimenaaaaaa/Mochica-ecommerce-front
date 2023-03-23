import dotenv from "dotenv";
dotenv.config();

export const config = {
  apiKey: process.env.API_KEY,
  // password: encodeURIComponent(process.env.DB_PASSWORD as string),
};
