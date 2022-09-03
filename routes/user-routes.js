const express = require("express");
const router = express.Router();
const {
  getUser,
  setUser,
  getUserById,
  updateUser,
  removeUser,
} = require("../controller/user-controller");

router.get("", getUser);
router.get("/:id", getUserById);
router.post("", setUser);
router.patch("/:id", updateUser);
router.delete("/:id", removeUser);

module.exports = router;
