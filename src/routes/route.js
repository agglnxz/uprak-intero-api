const express = require("express");
const router = express.Router();

const vendorAData = require("../vendors/vendorA");
const vendorBData = require("../vendors/vendorB");
const vendorCData = require("../vendors/vendorC");

// vendor A
router.get("/vendorA", (req, res) => {
  res.json({
    status: "success",
    message: "Data Vendor A retrieved successfully",
    data: vendorAData
  });
});

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
