const express = require("express");
const router = express.Router();

const { getDataVendorA } = require("../vendors/vendorA");
const { getDataVendorB } = require("../vendors/vendorB");
const { getDataVendorC } = require("../vendors/vendorC");
const { getAllProducts } = require('../integration/integrator');

// vendor A
router.get("/vendorA", (req, res) => {
  const dataA = getDataVendorA();
  res.json({
    status: "success",
    message: "Data Vendor A retrieved successfully",
    data: dataA
  });
});

// Endpoint untuk menampilkan data vendor B
router.get("/vendorB", (req, res) => {
  const dataB = getDataVendorB();
  res.json({
    status: "success",
    messsage: "Data Vendor B retrieved successfully",
    data: dataB
  });
});

router.get("/vendorC", (req, res) => {
  const dataC = getDataVendorC();
  res.json({
    status: "success",
    messsage: "Data Vendor C retrieved successfully",
    data: dataC
  });
});

// Endpoint Utama
router.get('/products', (req, res) => {
    try {
        const data = getAllProducts();
        
        // Mengirim respon JSON standar
        res.status(200).json({
            message: "Data berhasil digabungkan",
            total: data.length,
            data: data
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
