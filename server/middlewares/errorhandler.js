import { StatusCodes } from "http-status-codes";

export const errorhandler = (error, request, response, next) => {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMessage = error.message || "Internal Server Error";
  response.status(statusCode).json({ success: false, message: errorMessage });
};
