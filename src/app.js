const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const port = process.env.PORT || 8080;
const productManager = new ProductManager('./src/products.json');

app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const products = productManager.getProducts(limit);
    res.json({ products });
});

app.get('/products/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = productManager.getProductById(productId);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: `Product with id ${productId} not found` });
    }
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
