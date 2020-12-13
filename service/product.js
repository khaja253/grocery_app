const productModel = require('../models/product');

/**
 * Stores a new product into the database.
 * @param {Object} product product object to create.
 * @throws {Error} If the product is not provided.
 */
module.exports.create = async (product) => {
    if (!product)
        throw new Error('Missing product');

    return await productModel.create(product);
}

module.exports.getAll = async () => {

    return await productModel.find();
}

module.exports.deleteProductByName = async (name) => {

    return await productModel.deleteOne({name});
}