import CustomErrorHandler from "../middlewares/errorHandler.js";
const users = [];
export const getAllUsers = (req, res, next) => {
  try {
    res.json({
      message: "all user get request",
      data: users,
    });
    console.log("all user get request");
  } catch (error) {
    next(error);
  }
};

export const registerUser = (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName) {
      throw new CustomErrorHandler("Enter fullname", 400);
    }
    if (!email) {
      throw new CustomErrorHandler("Enter email", 400);
    }
    if (!password) {
      throw new CustomErrorHandler("Enter password", 400);
    }

    users.push({ ...req.body, id: users.length + 1 });
    res.json({
      message: "user registered successfully..",
      data: { ...req.body, id: users.length },
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

    res.json({
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

    res.json({
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

    res.json({
      message: `User deleted successfully`,
      data: removedUser,
    });
    console.log(`User ${id} deleted successfully`);
  } catch (error) {
    next(error);
  }
};
