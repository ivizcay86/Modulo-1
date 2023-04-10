const fs = require('fs');

class CartManager {
  constructor(path) {
    this.path = path;
    this.carts = this.loadCarts();
  }

  loadCarts() {
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

  saveCarts() {
    fs.writeFileSync(this.path, JSON.stringify(this.carts));
  }

  getNextId() {
    return this.carts.length > 0 ? this.carts[this.carts.length - 1].id + 1 : 1;
  }

  createCart() {
    const newCart = {
      id: this.getNextId(),
      products: [],
    };
    this.carts.push(newCart);
    this.saveCarts();
    return newCart;
  }

  getCartById(id) {
    const cart = this.carts.find((cart) => cart.id === id);
    if (!cart) {
      console.error(`Cart with id ${id} not found`);
    }
    return cart;
  }

  addProductToCart(cartId, productId) {
    const cart = this.getCartById(cartId);
    if (!cart) return;

    const productIndex = cart.products.findIndex((product) => product.product === productId);

    if (productIndex === -1) {
      cart.products.push({ product: productId, quantity: 1 });
    } else {
      cart.products[productIndex].quantity++;
    }

    this.saveCarts();
  }
}

module.exports = CartManager;
