import express from "express";
import userRouter from "./routes/user.routes.js";
import userCategory from "./routes/category.routes.js";
import { getDetailsOfRouter } from "./fileDataController/getDetailOfRouter.js";

const app = express();
const PORT = 2020;
let count = 0;

app.use(getDetailsOfRouter);

app.get("/", (req, res) => {
  res.json({
    message: "home page...",
  });
});

app.use("/user", userRouter);
app.use("/category", userCategory);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
