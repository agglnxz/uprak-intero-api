
const { getDataVendorA } = require('../vendors/vendorA');
const { getDataVendorB } = require('../vendors/vendorB');
const { getDataVendorC } = require('../vendors/vendorC');

const getAllProducts = () => {
    // --- PROSES DATA VENDOR A (Warung Legacy) ---
    const dataA = getDataVendorA().map(item => {
        // Soal: Diskon 10% untuk Vendor A 
        // Soal: Pastikan harga menjadi Integer (Type Safety) 
        const hargaAsli = parseInt(item.hrg);
        const hargaDiskon = hargaAsli - (hargaAsli * 0.10);

        return {
            id: item.kd_produk,
            nama: item.nm_brg,
            harga_final: Math.floor(hargaDiskon), // Pastikan integer
            status: item.ket_stok === "ada" ? "Tersedia" : "Habis", // Normalisasi status
            sumber: "Vendor A"
        };
    });

    // --- PROSES DATA VENDOR B (Distro Modern) ---
    const dataB = getDataVendorB().map(item => {
        return {
            id: item.sku,
            nama: item.productName,
            harga_final: item.price, // Sudah number, tidak perlu diubah
            status: item.isAvailable ? "Tersedia" : "Habis",
            sumber: "Vendor B"
        };
    });

    // --- PROSES DATA VENDOR C (Resto & Kuliner) ---
    const dataC = getDataVendorC().map(item => {
        // Soal: Jika kategori 'Food', tambah text "(Recommended)" 
        let namaProduk = item.details.name;
        if (item.details.category === 'Food') {
            namaProduk += " (Recommended)";
        }

        // Soal: Harga Final (Base Price + Tax)
        const totalHarga = item.pricing.base_price + item.pricing.tax;

        return {
            id: item.id.toString(), // Samakan jadi string agar konsisten
            nama: namaProduk,
            harga_final: totalHarga,
            status: item.stock > 0 ? "Tersedia" : "Habis",
            sumber: "Vendor C"
        };
    });

    // Gabungkan semua data dari ketiga vendor
    return [...dataA, ...dataB, ...dataC];
};

module.exports = { getAllProducts };