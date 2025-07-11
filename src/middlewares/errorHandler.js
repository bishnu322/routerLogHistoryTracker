export class CustomErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "failed" : "error";
    this.success = false;
    Error.captureStackTrace(this, CustomErrorHandler);
  }
}

export class ForbiddenHandler extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.status = statusCode >= 400 && statusCode < 500 ? "failed" : "error";
    this.success = false;
    Error.captureStackTrace(this, ForbiddenHandler);
  }
}

export const errorHandler = (error, req, res, next) => {
  const statusCode = error?.statusCode || 500;
  const status = error?.status || "error";

  res.status(statusCode).json({
    message: error?.message ?? "Internal server error",
    status: status,
    success: false,
    data: null,
  });
};

// export default CustomErrorHandler;
