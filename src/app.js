const express = require('express');
const exphbs = require('express-handlebars');
const productsRouter = require('./productsRouter');
const cartsRouter = require('./cartsRouter');
const ProductManager = require('./ProductManager');
const WebSocket = require('ws');

const productManager = new ProductManager('./products.json');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.get('/', (req, res) => {
  const products = productManager.loadProducts();
  res.render('home', { products });
});

app.get('/realtimeproducts', (req, res) => {
  const products = productManager.loadProducts();
  res.render('realTimeProducts', { products });
});

const server = app.listen(8080, () => console.log('Server running on port 8080'));

const wss = new WebSocket.Server({ server: server });

wss.on('connection', (ws) => {
  console.log('User connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    const data = JSON.parse(message);
    const { action, ...product } = data;

    if (action === 'addProduct') {
      productManager.addProduct(product);
    } else if (action === 'deleteProduct') {
      productManager.deleteProduct(product.id);
    }

    const products = productManager.loadProducts();
    const updateProductsMessage = JSON.stringify({ action: 'updateProducts', products });

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(updateProductsMessage);
      }
    });
  });
});





