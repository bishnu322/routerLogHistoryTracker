import { days, months } from "../constant/year.js";
import fileDetailController from "./fileDetailController.js";
export const getDetailsOfRouter = (req, res, next) => {
  let count = 0;
  const d = new Date();
  count = count + 1;

  const day = days[d.getDay()] || "Unknown";
  let month = months[d.getMonth()];

  let userReqDetails = {
    host: req.get("host"), //host
    origin: req.originalUrl, // get host original url
    requestMethod: req.method,
    year: d.getFullYear(),
    month: month,
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
