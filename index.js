const express = require("express");

// Initialize Express Application
const app = express();

//Port
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT}`);
});
