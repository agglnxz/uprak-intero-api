const vendorCData = [
  {
    "id": 501,
    "details": {
      "name": "Nasi Tempong",
      "category": "Food"
    },
    "pricing": {
      "base_price": 20000,
      "tax": 2000
    },
    "stock": 50
  },
  {
    "id": 502,
    "details": {
      "name": "Es Teh Manis",
      "category": "Beverage"
    },
    "pricing": {
      "base_price": 5000,
      "tax": 500
    },
    "stock": 100
  },
  {
    "id": 503,
    "details": {
      "name": "Ayam Bakar Madu",
      "category": "Food"
    },
    "pricing": {
      "base_price": 25000,
      "tax": 2500
    },
    "stock": 20
  }
];

const getDataVendorC = () => {
    return vendorCData;
}

module.exports = {getDataVendorC};