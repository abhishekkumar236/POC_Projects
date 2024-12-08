import { Request, Response, NextFunction } from "express";
import sendResponse from "../utils/sendResponse";

interface ICustomError extends Error {
  status?: number | string;
}

async function errorHandler(
  error: ICustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  if (error.status === 401 && error.message === "Unauthorized") {
    const status = 401;
    const message = "Requires authentication";
    sendResponse(res, { status, message, success: false, data: null });
    return;
  }

  if (
    (error.status === 401 && error.message === "Permission denied") ||
    (error.status === 401 && error.message === "Invalid token")
  ) {
    const status = 403;
    const message = error.message;

    sendResponse(res, { status, success: false, message, data: null });
    return;
  }

  const status = 500;
  const message = error.message || "Internal Server Error";

  sendResponse(res, { status, success: false, message, data: null });
}

export default errorHandler;
