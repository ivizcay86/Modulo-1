const ProductManager = require('./ProductManager');

const productManager = new ProductManager('./products.json');

productManager.addProduct({
    title: 'Product 1',
    description: 'Description of Product 1',
    price: 10.99,
    thumbnail: 'http://example.com/product1.jpg',
    code: 'PROD1',
    stock: 100
  });
  
  productManager.addProduct({
    title: 'Product 2',
    description: 'Description of Product 2',
    price: 11.99,
    thumbnail: 'http://example.com/product2.jpg',
    code: 'PROD2',
    stock: 50
  });
  
  console.log(productManager.getProducts());