import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "all category get request",
  });
  console.log("all category get request");
});

router.post("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category post request ${id}`,
  });
  console.log(`all category post request ${id}`);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category put request ${id}`,
  });
  console.log(`all category put request ${id}`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category get by id request ${id}`,
  });
  console.log(`all category get by id request ${id}`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category patch request ${id}`,
  });
  console.log(`all category patch request ${id}`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `all category delete request ${id}`,
  });
  console.log(`all category delete request ${id}`);
});

export default router;
