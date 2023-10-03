const User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  console.log(req.body);
  try {
    const { userName, fullName, admissionNo, email, password } = req.body;
    if (!userName || !fullName || !admissionNo || !email || !password) {
      res.status(401).json({ message: "Invalid Credentials", success: false });
    }

    //Check if user exist
    const user = await User.findOne({ email });

    if (user)
      res.status(400).json({ message: "User Already Exist", success: false });

    const encryptedPassword = await bcrypt.hash(password, 12);
    console.log(encryptedPassword);

    const saveData = await User.create({
      email,
      password: encryptedPassword,
      userName,
      admissionNo,
      email,
      fullName,
    });
    const token = await jwt.sign(
      { email: saveData.email, id: saveData._id },
      process.env.SECRET,
      {
        expiresIn: "6h",
      }
    );

    res.status(200).json({ user: user, token: token });
  } catch (err) {
    console.log(err);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email)
    res.status(400).json({ message: "Invalid Credentials", success: false });
  try {
    const user = await User.findOne({ email });
    if (!user)
      res.status(400).json({ message: "User not found", success: false });

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword)
      res
        .status(400)
        .json({ message: "Incorrect Login Details", success: false });

    const token = await jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRET,
      {
        expiresIn: "6h",
      }
    );
    res.status(200).json({
      message: "Login Succesfull",
      user: user,
      success: true,
      token: token,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "An Error Occured", error: err, success: false });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { Register, Login, getUsers };
