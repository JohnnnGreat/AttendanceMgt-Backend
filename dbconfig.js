const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// DB Url
const DB_URL = process.env.DB_URL;
console.log(DB_URL);

const connectToDb = async () => {
  try {
    // Connect to mongoose database
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      //   useFindAndModify: false,
      useUnifiedTopology: true,
    });
  } catch (err) {
    //If there is an error
    if (err) {
      console.log("Error connecting to Database", err.message);
    }
  }
};

module.exports = {
  connectToDb,
};
