const express = require("express");
const { connectToDb } = require("./dbconfig");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoutes.js");
const cors = require("cors");

// Initialize Express Application
const app = express();
app.use(cors());

// COnfigurations
const { configs } = require("./Configs/configs");
app.use(express.json());
configs();

//Port
const PORT = process.env.PORT || 3030;

app.use("/users", userRoutes);

const connect = async () => {
  await connectToDb();
  await app.listen(PORT, () => {
    console.log(`Server Running at Port ${PORT}`);
  });
};

connect();
