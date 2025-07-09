import CustomErrorHandler from "../middlewares/errorHandler.js";

const categories = [];
export const getAllCategory = (req, res, next) => {
  try {
    res.json({
      message: "All categories",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

export const registerCategory = (req, res, next) => {
  try {
    const { categoryName } = req.body;
    if (!categoryName) {
      throw new CustomErrorHandler("Enter category name", 400);
    }

    const categoryData = { ...req.body, id: categories.length + 1 };
    categories.push(categoryData);
    res.json({
      message: `category registered successfully`,
      data: categoryData,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = (req, res, next) => {
  try {
    const { id } = req.params;
    const categoryData = req.body;

    const categoryIndex = categories.findIndex(
      (cat) => cat.id === parseInt(id)
    );

    if (categoryIndex === -1) {
      throw new CustomErrorHandler(`Category index ${id} not found`, 400);
    }

    categories[categoryIndex] = {
      ...categories[categoryIndex],
      ...categoryData,
    };

    res.json({
      message: `Category updated successfully`,
      data: categoryData,
    });
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = (req, res, next) => {
  try {
    const { id } = req.params;

    const categoryFound = categories.find((cat) => cat.id === parseInt(id));

    if (!categoryFound) {
      throw new CustomErrorHandler(
        "Enter valid id to search any category",
        400
      );
    }

    res.json({
      message: `your searched data ${id}`,
      data: categoryFound,
    });
  } catch (error) {
    next(error);
  }
};

export const removeCategory = (req, res, next) => {
  try {
    const { id } = req.params;
    const categoryIndex = categories.findIndex(
      (cat) => cat.id === parseInt(id)
    );

    const removedCategory = categories.splice(categoryIndex, 1);
    if (!removeCategory) {
      throw new CustomErrorHandler("Enter valid ${id} to remove category", 400);
    }
    res.json({
      message: `removed ${id} successfully`,
      data: removedCategory,
    });
  } catch (error) {
    next(error);
  }
};
