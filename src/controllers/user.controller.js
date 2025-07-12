import { User } from "../models/user.models.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json({
      message: "all user get request",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req, res) => {
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

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const user = await User.updateOne({ _id: id }, { $set: updateData });

    res.status(200).json({
      message: `User updated successfully`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    res.status(200).json({
      message: `User retrieved successfully`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const removeUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.deleteOne({ _id: id });

    res.status(200).json({
      message: `User deleted successfully`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
