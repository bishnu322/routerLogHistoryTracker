import { CustomErrorHandler } from "../middlewares/errorHandler.js";
import { Category } from "../models/category.models.js";
import { ForbiddenHandler } from "../middlewares/errorHandler.js";
import e from "express";

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();

    if (!categories) {
      throw new ForbiddenHandler("All categories cannot found");
    }

    res.status(200).json({
      message: "All categories",
      data: categories,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }
    throw new CustomErrorHandler("all category error", 500);
  }
};

export const registerCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName, categoryType } = req.body;
    console.log(req.body);

    if (!categoryName) {
      throw new ForbiddenHandler("categoryName cannot be empty");
    }

    if (!categoryType) {
      throw new ForbiddenHandler("categoryName cannot be empty");
    }

    const categories = await Category.insertOne({ categoryName, categoryType });

    res.status(201).json({
      message: `category registered successfully`,
      data: categories,
    });
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new CustomErrorHandler(" register category error", 500);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryData = req.body;

    if (!categoryData) {
      throw new ForbiddenHandler("Update filed should be field by any data");
    }

    const categories = await Category.updateOne(
      { _id: id },
      { $set: categoryData }
    );

    res.status(200).json({
      message: `Category updated successfully`,
      data: categories,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }
    throw new CustomErrorHandler("all update category error", 500);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ForbiddenHandler("Id should be provided");
    }

    const categories = await Category.findById(id);

    res.status(200).json({
      message: `your searched data ${id}`,
      data: categories,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }
    throw new CustomErrorHandler("all category by ID error", 500);
  }
};

export const removeCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ForbiddenHandler("provide id to remove element");
    }

    const categories = await Category.deleteOne({ _id: id });
    res.status(200).json({
      message: `removed ${id} successfully`,
      data: categories,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }

    throw new CustomErrorHandler("all remove category error", 500);
  }
};
