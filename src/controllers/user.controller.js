import mongoose from "mongoose";
import { CustomErrorHandler } from "../middlewares/errorHandler.js";

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

const User = mongoose.model("User", userSchema);

export const getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json({
      message: "all user get request",
      data: user,
    });
    console.log("all user get request");
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.insertOne({ firstName, lastName, email, password });

    res.status(201).json({
      message: "user registered successfully..",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Find user by ID
    const userIndex = users.findIndex((user) => user.id === parseInt(id));

    if (userIndex === -1) {
      throw new CustomErrorHandler(`User with ID ${id} not found`, 404);
    }

    // Update user data
    users[userIndex] = { ...users[userIndex], ...updateData };

    res.status(200).json({
      message: `User updated successfully`,
      data: users[userIndex],
    });
    console.log(`User ${id} updated successfully`);
  } catch (error) {
    next(error);
  }
};

export const getUserById = (req, res, next) => {
  try {
    const { id } = req.params;

    // Find user by ID
    const user = users.find((user) => user.id === parseInt(id));

    if (!user) {
      throw new CustomErrorHandler(`User with ID ${id} not found`, 404);
    }

    res.status(200).json({
      message: `User retrieved successfully`,
      data: user,
    });
    console.log(`User ${id} retrieved successfully`);
  } catch (error) {
    next(error);
  }
};

export const removeUser = (req, res, next) => {
  try {
    const { id } = req.params;

    // Find user index
    const userIndex = users.findIndex((user) => user.id === parseInt(id));

    if (userIndex === -1) {
      throw new CustomErrorHandler(`User with ID ${id} not found`, 404);
    }

    // Remove user
    const removedUser = users.splice(userIndex, 1)[0];

    res.status(200).json({
      message: `User deleted successfully`,
      data: removedUser,
    });
    console.log(`User ${id} deleted successfully`);
  } catch (error) {
    next(error);
  }
};
