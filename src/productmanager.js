const fs = require('fs');

class ProductManager {
  constructor(path = './products.json') {
    this.path = path;
    this.products = this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        fs.writeFileSync(this.path, JSON.stringify([]));
        return [];
      }
      throw error;
    }
  }

  saveProducts() {
    fs.writeFileSync(this.path, JSON.stringify(this.products));
  }

  getNextId() {
    return this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
  }

  addProduct(product) {
    const { title, description, price, thumbnail, code, stock } = product;
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error('All fields are mandatory');
      return;
    }
    if (this.products.some((product) => product.code === code)) {
      console.error(`Product with code ${code} already exists`);
      return;
    }
    const newProduct = {
      id: this.getNextId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
    this.saveProducts();
    console.log(`Product with id ${newProduct.id} added successfully`);
  }

  getProducts(limit) {
    const products = this.products;
    if (limit) {
      return products.slice(0, parseInt(limit));
    }
    return products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === parseInt(id));
    if (!product) {
      console.error(`Product with id ${id} not found`);
    }
    return product;
  }

  updateProduct(id, updatedProduct) {
    const productIndex = this.products.findIndex((product) => product.id === id);

    if (productIndex === -1) {
      console.error(`Product with id ${id} not found`);
      return;
    }

    const existingId = this.products[productIndex].id;
    this.products[productIndex] = { ...updatedProduct, id: existingId };
    this.saveProducts();
    console.log(`Product with id ${id} updated successfully`);
  }

  deleteProduct(id) {
    const productIndex = this.products.findIndex((product) => product.id === id);

    if (productIndex === -1) {
      console.error(`Product with id ${id} not found`);
      return;
    }

    this.products.splice(productIndex, 1);
    this.saveProducts();
    console.log(`Product with id ${id} deleted successfully`);
  }
}

module.exports = ProductManager;
