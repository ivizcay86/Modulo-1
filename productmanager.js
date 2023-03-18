class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('All fields are mandatory');
        return;
      }
      if (this.products.some(product => product.code === code)) {
        console.error(`Product with code ${code} already exists`);
        return;
      }
      const product = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
      this.products.push(product);
      console.log(`Product with id ${product.id} added successfully`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        console.error(`Product with id ${id} not found`);
      }
      return product;
    }
  }
  const productManager = new ProductManager();

  productManager.addProduct("Product 1","Descripcion of Product 1",10.99,"http://example.com/product1.jpg", "PROD1", 100);
  productManager.addProduct("Product 2","Descripcion of Product 2",11.99,"http://example.com/product2.jpg", "PROD2", 50);

  console.log(productManager.getProducts());



