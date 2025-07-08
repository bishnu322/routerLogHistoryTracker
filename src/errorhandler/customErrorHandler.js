class CustomErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "failed" : "Error";
    (this.success = "false"), (this.data = null);
  }
}

export default CustomErrorHandler;
