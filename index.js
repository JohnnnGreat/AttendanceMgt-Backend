const express = require("express");

// Initialize Express Application
const app = express();

//Port
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Now Working, THank you" });
});

app.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT}`);
});
