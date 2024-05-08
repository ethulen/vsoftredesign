const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle POST request
app.post("/api/saveConfiguration", (req, res) => {
  const configuration = req.body;
  // Here you can save the configuration data to a database or perform any other necessary operations
  console.log("Received configuration:", configuration);
  res.status(200).send("Configuration saved successfully");
});
app.post("/api/saveSiteConfiguration", (req, res) => {
    const siteConfig = req.body;
    // Logic to save site configuration to database or file
    console.log("Site Configuration:", siteConfig);
    res.status(200).json({ message: "Site configuration saved successfully." });
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
