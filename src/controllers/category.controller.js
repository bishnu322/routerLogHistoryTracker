export const getAllCategory = (req, res) => {
  res.json({
    message: "all category get request",
  });
  console.log("all category get request");
};

export const registerCategory = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category post request ${id}`,
  });
  console.log(`all category post request ${id}`);
};

export const updateCategory = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category put request ${id}`,
  });
  console.log(`all category put request ${id}`);
};

export const getCategoryById = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category get by id request ${id}`,
  });
  console.log(`all category get by id request ${id}`);
};

export const removeCategory = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category delete request ${id}`,
  });
  console.log(`all category delete request ${id}`);
};
