const express = require('express');
const app = express();
const productsRouter = require('./productsRouter');
const cartsRouter = require('./cartsRouter.js');

app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(8080, () => console.log('Server running on port 8080'));
