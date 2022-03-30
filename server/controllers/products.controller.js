const Product = require("../models/products.model");

module.exports = {
    findAllProducts: (request, response) => {
        Product.find({})
            .then((allProducts) => {
                console.log(allProducts);
                response.json(allProducts);
            })
            .catch(() => {
                console.log("Find all Failed");
                response.json({message: err})
            })
    },

    addNewProduct: (request, response) => {
        Product.create(request.body)
            .then((newProd) => {
                console.log(newProd);
                response.json(newProd);
            })
            .catch((err) => {
                console.log("Something went wrong with Product Creation")
                response.status(400).json(err);

            })
    },

    findOneProduct: (request, response) => {
        Product.findOne({_id: request.params.id})
            .then((oneProduct) => {
                console.log(oneProduct);
                response.json(oneProduct)
            })
            .catch((err) => {
                console.log("There was this error in finding your Product: " + err)
                response.json({message: "Error wit finding the game", err})
            })
    },

    deleteOneProduct: (request, response) => {
        Product.deleteOne({_id: request.params.id})
            .then((deletedProduct) => {
                console.log(deletedProduct);
                response.json(deletedProduct)
            })
            .catch((err) => {
                console.log("There was this error in finding your Product: " + err)
                response.json({message: "Error wit finding the game", err})
            })
    },

    updateOneProduct: (request, response) => {
        Product.findOneAndUpdate({_id: request.params.id},
            request.body,
            {new: true, runValidators: true}

            )
            .then((updatedProduct) => {
                console.log(updatedProduct);
                response.json(updatedProduct)
            })
            .catch((err) => {
                console.log("There was this error with updating your Product: " + err)
                response.json({message: "Error with updating the game", err})
            })
    }


}