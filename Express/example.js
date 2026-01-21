const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

// Another route
app.get("/welcome", (req, res) => {
  res.send("Welcome to MERN Stack Backend!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
