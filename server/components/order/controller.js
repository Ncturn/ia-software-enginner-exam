const store = require('./store');
const getOrder =  (filter) => {
  const product = store.find(filter);
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

const removeOrder = (order) => {
  const response = store.remove(order);
  return {
    code: 200,
    body: response,
    error: null,
  }
};

const editOrder = (order) => {
  const response = store.edit(order);
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