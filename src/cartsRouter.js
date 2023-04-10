const express = require('express');
const router = express.Router();
const CartManager = require('./CartManager');
const cartManager = new CartManager('./carts.json');
const ProductManager = require('./ProductManager');
const productManager = new ProductManager('./products.json');

router.post('/', (req, res) => {
  const newCart = cartManager.createCart();
  res.json(newCart);
});

router.get('/:cid', (req, res) => {
  const cartId = parseInt(req.params.cid);
  const cart = cartManager.getCartById(cartId);

  if (!cart) {
    res.status(404).json({ error: `Cart with id ${cartId} not found` });
    return;
  }

  const cartProducts = cart.products.map(({ product, quantity }) => {
    const productData = productManager.getProductById(product);
    return { ...productData, quantity };
  });

  res.json(cartProducts);
});

router.post('/:cid/product/:pid', (req, res) => {
  const cartId = parseInt(req.params.cid);
  const productId = parseInt(req.params.pid);

  const cart = cartManager.getCartById(cartId);
  const product = productManager.getProductById(productId);

  if (!cart) {
    res.status(404).json({ error: `Cart with id ${cartId} not found` });
    return;
  }

  if (!product) {
    res.status(404).json({ error: `Product with id ${productId} not found` });
    return;
  }

  cartManager.addProductToCart(cartId, productId);
  res.json({ message: `Product with id ${productId} added to cart with id ${cartId}` });
});

module.exports = router;
