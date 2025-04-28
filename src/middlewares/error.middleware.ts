import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../core/exceptions";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      error: {
        code: err.statusCode,
        message: err.message,
        details: err.details,
      },
    });
  }

  console.error("[UNHANDLED_ERROR]", err.stack);
  res.status(500).json({
    error: {
      code: 500,
      message: "Internal Server Error",
    },
  });
}
