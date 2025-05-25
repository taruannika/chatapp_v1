import { body, param, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customError.js";
import User from "../models/user.model.js";

const validate = (validations) => {
  return async (request, response, next) => {
    for (const validation of validations) {
      await validation.run(request);
    }
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return next(
        new BadRequestError(
          "Error on validation",
          errors.array().map((e) => e.msg)
        )
      );
    }
    next();
  };
};

export const validateSignup = validate([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("Email already in use");
      }
      return true;
    }),
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("password is required"),
]);
