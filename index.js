const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const vendorRoute = require("./src/routes/route");

app.use("/api", vendorRoute); 
// run server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
