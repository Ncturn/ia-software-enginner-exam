const store = require('./store');
const getProduct =  (accountfilter) => {
  const product = store.find();
  return {
    code: 200,
    body: product,
    error: null,
  };
};

const addProduct = (product) => {
  const response = store.add(product);
  return {
    code: 200,
    body: response,
    error: null,
  };
}

module.exports = {
  getProduct,
  addProduct
};