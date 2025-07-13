import "dotenv/config";
import express from "express";
import userRouter from "./routes/user.routes.js";
import userCategory from "./routes/category.routes.js";
import { getDetailsOfRouter } from "./fileDataController/getDetailOfRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { DB_CONNECTION } from "./config/db.config.js";

const app = express();
const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI;

DB_CONNECTION(DB_URI);

app.use(express.json({ limit: "3mb" }));
app.use(getDetailsOfRouter);

app.get("/", (req, res) => {
  res.json({
    message: "home page...",
  });
});

//Routing
app.use("/user", userRouter);
app.use("/category", userCategory);

//edge case error handling
app.all("/{*abc}", async (req, res, next) => {
  const message = `cannot ${req.method} on ${req.originalUrl}`;
  const error = new Error(message);
  next(error);
});

// Error handler middleware should be placed after all routes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
