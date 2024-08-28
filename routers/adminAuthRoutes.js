const express = require("express");
const {
  register,
  login,
  updateProfile,
  getAdmin,
} = require("../controllers/adminAuthController");
const adminAuthRouter = express.Router();

adminAuthRouter.post("/register", register);

adminAuthRouter.post("/login", login);

adminAuthRouter.put("/update", updateProfile);

adminAuthRouter.post("/getAdmin", getAdmin);

module.exports = adminAuthRouter;
