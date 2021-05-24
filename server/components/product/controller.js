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
};

const removeProduct = (product) => {
  const response = store.remove(product);
  return {
    code: 200,
    body: response,
    error: null,
  }
};

const editProduct = (product) => {
  const response = store.edit(product);
  return {
    code: 200,
    body: response,
    error: null,
  }
}

module.exports = {
  getProduct,
  addProduct,
  removeProduct,
  editProduct
};