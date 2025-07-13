import { ForbiddenHandler } from "../middlewares/errorHandler.js";
import { User } from "../models/user.models.js";

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();

    if (!user) {
      throw new ForbiddenHandler("all users cannot be found!");
    }

    res.status(200).json({
      message: "all user get request",
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }
    next(error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName) {
      throw new ForbiddenHandler("FirstName should be there");
    }
    if (!lastName) {
      throw new ForbiddenHandler("lastName should be there");
    }
    if (!email) {
      throw new ForbiddenHandler("email should be there");
    }
    if (!password) {
      throw new ForbiddenHandler("password should be there");
    }

    const user = await User.insertOne({ firstName, lastName, email, password });

    res.status(201).json({
      message: "user registered successfully..",
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }
    next(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!id) {
      throw new ForbiddenHandler("id should be there");
    }
    const user = await User.updateOne({ _id: id }, { $set: updateData });

    res.status(200).json({
      message: `User updated successfully`,
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }
    next(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ForbiddenHandler("id should be there");
    }
    const user = await User.findById(id);

    res.status(200).json({
      message: `User retrieved successfully`,
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }
    next(error);
  }
};

export const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ForbiddenHandler("id should be there");
    }
    const user = await User.deleteOne({ _id: id });

    res.status(200).json({
      message: `User deleted successfully`,
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      error;
    }
    next(error);
  }
};
