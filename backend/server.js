const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// port for the server
const PORT = process.env.PORT || 5001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes


// trigger to server
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
