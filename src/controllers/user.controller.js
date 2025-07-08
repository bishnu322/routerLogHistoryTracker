export const getAllUsers = (req, res) => {
  res.json({
    message: "all user get request",
  });
  console.log("all user get request");
};

export const registerUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user post request ${id}`,
  });
  console.log(`all user post request ${id}`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user put request ${id}`,
  });
  console.log(`all user put request ${id}`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user get by id request ${id}`,
  });
  console.log(`all user get by id request ${id}`);
};

export const removeUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user delete request ${id}`,
  });
  console.log(`all user delete request ${id}`);
};
