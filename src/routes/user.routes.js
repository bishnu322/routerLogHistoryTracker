import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "all user get request",
  });
  console.log("all user get request");
});

router.post("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user post request ${id}`,
  });
  console.log(`all user post request ${id}`);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user put request ${id}`,
  });
  console.log(`all user put request ${id}`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user get by id request ${id}`,
  });
  console.log(`all user get by id request ${id}`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user patch request ${id}`,
  });
  console.log(`all user patch request ${id}`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all user delete request ${id}`,
  });
  console.log(`all user delete request ${id}`);
});

export default router;
