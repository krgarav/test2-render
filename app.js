const express = require("express");
const cron = require("node-cron");
const app = express();

const axios = require("axios");
const PORT = 4000;

// Route for the homepage
app.get("/", (req, res) => {
  res.send("Hello from node server 2 version");
});

// Route for the cron job endpoint
app.get("/cronServer", (req, res) => {
  res.send("cron job running");
});



// function scheduleTask() {
//   // Generate a random interval between 30 and 40 seconds
//   const interval = Math.floor(Math.random() * (40 - 30 + 1) + 30) * 1000;

//   console.log(`Scheduling next task in ${interval / 1000} seconds`);

//   // Use setTimeout to schedule the task
//   setTimeout(() => {
//     console.log("Running a task");

//     // Call the /cronServer endpoint programmatically
//     axios
//       .get("https://tset-render.onrender.com/cronServer")
//       .then((response) => console.log(response.data))
//       .catch((error) =>
//         console.error("Error calling /cronServer:", error.message)
//       );

//     // Schedule the next task
//     scheduleTask();
//   }, interval);
// }

// // Start the initial task scheduling
// scheduleTask();

// Define your cron job
cron.schedule('*/14 * * * *', () => {
  // This function runs every 30 seconds
  console.log('Running a task every 14 minute');
  // You can call an endpoint or perform a task here
  // Example: Call the /cronServer endpoint programmatically
  axios.get('https://tset-render.onrender.com/cronServer')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error calling /cronServer:', error.message));
});


app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
