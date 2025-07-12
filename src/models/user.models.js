import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "lastName is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Already exists"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      min: 5,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
