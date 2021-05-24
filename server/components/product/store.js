const { products } = require('./products');

const validateSku = (newProduct) => {
  return products.find(product => product.sku === newProduct.sku);
};

const find =  () => {
  return products;
};

const add = (product) => {
  const isSkuValid = validateSku(product);
  if (isSkuValid) {
    return 'El sku ingresado no es valido'
  }
  products.push(product);
  return product;
}

module.exports = {
  find,
  add
};