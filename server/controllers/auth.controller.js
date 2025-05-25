import User from "../models/user.model.js";

export const signupUser = async (request, response, next) => {
  try {
    const user = await User.create(request.body);
    response.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
export const loginUser = async (request, response, next) => {};
export const logoutUser = (request, response, next) => {};
