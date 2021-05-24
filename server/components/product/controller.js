const store = require('./store');
const getProduct =  (accountfilter) => {
  const product = store.find();
  return {
    code: 200,
    body: product,
    error: null,
  };
};

module.exports = {
  getProduct
};