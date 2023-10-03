const express = require("express");
const { Register, Login, getUsers } = require("../Controller/Users");

const router = express.Router();
// Register Controlss
router.post("/register", Register);

//Login Controls
router.post("/login", Login);

router.get("/getusers", getUsers);
module.exports = router;
