const express = require("express");
const cron = require("node-cron");
const app = express();


const PORT = 4000;

// Route for the homepage
app.get("/", (req, res) => {
  res.send("Hello from node server 2 version");
});

// Route for the cron job endpoint
app.get("/cronServer", (req, res) => {
  res.send("cron job running");
});

// Define your cron job
cron.schedule("*/30 * * * * *", () => {
  // This function runs every 30 seconds
  console.log("Running a task every 30 seconds");
  // You can call an endpoint or perform a task here
  // Example: Call the /cronServer endpoint programmatically
  const axios = require("axios");
  axios
    .get("https://tset-render.onrender.com/cronServer")
    .then((response) => console.log(response.data))
    .catch((error) =>
      console.error("Error calling /cronServer:", error.message)
    );
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
