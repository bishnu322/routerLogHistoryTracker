import mongoose from "mongoose";

export const DB_CONNECTION = async (DB_URI) => {
  await mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("DB connected successfully...");
    })
    .catch((error) => {
      console.log("db error", error);
    });
};
