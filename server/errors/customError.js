import { StatusCodes } from "http-status-codes";

export class BadRequestError extends Error {
  constructor(message, errors) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.success = false;
    this.errors = errors;
  }
}

export class NotFoundtError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
