import express from "express";
import {
  getAllUsers,
  registerUser,
  updateUser,
  getUserById,
  removeUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", getAllUsers);
router.post("/:id", registerUser);
router.put("/:id", updateUser);
router.get("/:id", getUserById);
router.delete("/:id", removeUser);

export default router;
