const express = require("express");
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/User.controller");


const UserRouter = express.Router();

UserRouter.post("/", createUser);
UserRouter.get("/", getAllUsers);
UserRouter.get("/:id", getUserById);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

module.exports = UserRouter;
