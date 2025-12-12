const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
// const vendorARoute = require("./src/routes/vendorA.route");
const vendorBRoute = require("./src/routes/vendorB.route");

// app.use("/vendorA", vendorARoute);
app.use("/vendorB", vendorBRoute);

// run server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
