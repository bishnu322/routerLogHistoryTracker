import fs from "fs";
const fileDetailController = (userReqDetails, count) => {
  const logData = `${count}: ${JSON.stringify(userReqDetails)}\n`;

  if (!fs.existsSync("./log")) {
    fs.mkdir("./log", (error) => {
      if (error) {
        return console.error("Error creating directory:", error);
      }

      fs.writeFile("./log/log.txt", logData, (error) => {
        if (error) return console.error("Error writing file:", error);
        console.log("File written successfully");
      });
    });
  } else {
    fs.appendFile("./log/log.txt", logData, (error) => {
      if (error) {
        console.error("Error while appending file:", error);
      }
    });
  }
};

export default fileDetailController;
