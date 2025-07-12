import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      trim: true,
      required: [true, "categoryName cannot be empty"],
    },
    categoryType: {
      type: String,
      trim: true,
      required: [true, "categoryType cannot be empty"],
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
