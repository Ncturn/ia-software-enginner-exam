const store = require('./store');
const getOrder =  () => {
  const product = store.find();
  return {
    code: 200,
    body: product,
    error: null,
  };
};

const addOrder = (order) => {
  const response = store.add(order);
  return {
    code: 200,
    body: response,
    error: null,
  };
};

const removeOrder = (product) => {
  const response = store.remove(product);
  return {
    code: 200,
    body: response,
    error: null,
  }
};

const editOrder = (product) => {
  const response = store.edit(product);
  return {
    code: 200,
    body: response,
    error: null,
  }
}

module.exports = {
  getOrder,
  addOrder,
  removeOrder,
  editOrder
};