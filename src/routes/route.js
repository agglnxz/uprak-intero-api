// src/routes/vendorB.route.js

const express = require("express");
const router = express.Router();
const vendorBData = require("../vendors/vendorB");
const vendorCData = require("../vendors/vendorC");

// Endpoint untuk menampilkan data vendor B
router.get("/vendorB", (req, res) => {
  res.json({
    status: "success",
    messsage: "Data Vendor B retrieved successfully",
    data: vendorBData
  });
});
router.get("/vendorC", (req, res) => {
  res.json({
    status: "success",
    messsage: "Data Vendor C retrieved successfully",
    data: vendorCData
  });
});

module.exports = router;
