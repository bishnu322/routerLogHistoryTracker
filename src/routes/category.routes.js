import express from "express";
import {
  getAllCategory,
  registerCategory,
  updateCategory,
  getCategoryById,
  removeCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getAllCategory);
router.post("/", registerCategory);
router.put("/:id", updateCategory);
router.get("/:id", getCategoryById);
router.delete("/:id", removeCategory);

export default router;
