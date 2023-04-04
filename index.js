const ProductManager = require('./src/ProductManager');

const productManager = new ProductManager('./src/products.json');

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

productManager.addProduct({
  title: 'Product 3',
  description: 'Description of Product 3',
  price: 12.99,
  thumbnail: 'http://example.com/product3.jpg',
  code: 'PROD3',
  stock: 25
});

productManager.addProduct({
  title: 'Product 4',
  description: 'Description of Product 4',
  price: 13.99,
  thumbnail: 'http://example.com/product4.jpg',
  code: 'PROD4',
  stock: 12
});

productManager.addProduct({
  title: 'Product 5',
  description: 'Description of Product 5',
  price: 14.99,
  thumbnail: 'http://example.com/product5.jpg',
  code: 'PROD5',
  stock: 6
});

productManager.addProduct({
  title: 'Product 6',
  description: 'Description of Product 6',
  price: 15.99,
  thumbnail: 'http://example.com/product6.jpg',
  code: 'PROD6',
  stock: 3
});

productManager.addProduct({
  title: 'Product 7',
  description: 'Description of Product 7',
  price: 16.99,
  thumbnail: 'http://example.com/product7.jpg',
  code: 'PROD7',
  stock: 1
});

productManager.addProduct({
  title: 'Product 8',
  description: 'Description of Product 8',
  price: 17.99,
  thumbnail: 'http://example.com/product8.jpg',
  code: 'PROD8',
  stock: 2
});

productManager.addProduct({
  title: 'Product 9',
  description: 'Description of Product 9',
  price: 18.99,
  thumbnail: 'http://example.com/product9.jpg',
  code: 'PROD9',
  stock: 4
});

productManager.addProduct({
  title: 'Product 10',
  description: 'Description of Product 10',
  price: 19.99,
  thumbnail: 'http://example.com/product10.jpg',
  code: 'PROD10',
  stock: 8
});

console.log(productManager.getProducts());
