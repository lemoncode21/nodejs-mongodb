const asyncHandler = require("express-async-handler");
const User = require("../model/user");

const getUser = asyncHandler(async (req, res) => {
  const userList = await User.find();

  res.status(200).json({
    description: "Successfully fetched all data!",
    result: userList,
  });
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    description: "Successfully fetched data by id",
    result: user,
  });
});

const setUser = asyncHandler(async (req, res) => {
  await User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  res.status(200).json({
    description: "Successfully saved data!",
  });
});

const updateUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json({
    description: "Successfully updated user data!",
  });
});

const removeUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  await user.remove();
  res.status(200).json({
    description: "Successfully removed user data!",
  });
});

module.exports = {
  getUser,
  setUser,
  getUserById,
  updateUser,
  removeUser,
};
