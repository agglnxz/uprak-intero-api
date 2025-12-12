// src/routes/vendorB.route.js

const express = require("express");
const router = express.Router();
const vendorBData = require("../vendors/vendorB");

// Endpoint untuk menampilkan data vendor B
router.get("/", (req, res) => {
  res.json(vendorBData);
});

module.exports = router;
