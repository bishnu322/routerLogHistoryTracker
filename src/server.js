import express from "express";
import userRouter from "./routes/user.routes.js";
import userCategory from "./routes/category.routes.js";
import fileDetailController from "./fileDataController/fileDetailController.js";

const app = express();
const PORT = 2020;
let count = 0;

const getDetailsOfRouter = (req, res, next) => {
  const d = new Date();
  count = count + 1;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[d.getDay()] || "Unknown";

  let userReqDetails = {
    host: req.get("host"),
    origin: req.originalUrl,
    requestMethod: req.method,
    year: d.getFullYear(),
    month: d.getMonth(),
    day: day,
    hours: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
    milliSecond: d.getMilliseconds(),
  };
  //   console.log(req.get("host"), req.originalUrl);
  fileDetailController(userReqDetails, count);
  next();
};
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
