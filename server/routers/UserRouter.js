const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const JWTConfig = require("../config/JWTConfig");

router.post("/login", userController.login);
router.post("/saveuser", userController.saveUser);
router.get("/getuser", JWTConfig.verify, [JWTConfig.AdminOrUser], userController.getUserById);
router.get("/getallusers", JWTConfig.verify, [JWTConfig.AdminOrUser], userController.getAllUsers);
router.put("/updateuser", JWTConfig.verify, [JWTConfig.AdminOrUser], userController.updateUser);
router.delete("/deleteuser", JWTConfig.verify, [JWTConfig.Admin], userController.deleteUserById);

module.exports = router;
