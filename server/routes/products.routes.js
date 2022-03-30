const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {

    app.get("/api/products", ProductsController.findAllProducts);

    app.post("/api/products", ProductsController.addNewProduct);

    app.get("/api/products/:id", ProductsController.findOneProduct);

    app.delete("/api/products/:id", ProductsController.deleteOneProduct);

    app.put("/api/products/:id", ProductsController.updateOneProduct);

}