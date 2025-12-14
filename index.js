const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const mainRoute = require("./src/routes/route");

app.get('/', (req, res) => {
  res.send("Halo! Server Banyuwangi Marketplace sudah berjalan.");
});

app.use("/api",mainRoute); 
// run server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
