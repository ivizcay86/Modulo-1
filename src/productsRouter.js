const express = require('express');
const router = express.Router();
const ProductManager = require('./ProductManager');

const productManager = new ProductManager('./products.json');

router.post('/', (req, res) => {
  const { title, description, code, price, stock, category, thumbnails } = req.body;

  try {
    const newProduct = productManager.addProduct({
      title,
      description,
      code,
      price,
      stock,
      category,
      thumbnails
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Other router endpoints...

module.exports = router;
