const product = require('./components/product/network');
const order = require('./components/order/network');

const routes = (server) => {
  server.use('/product', product);
  server.use('/order', order);
};

module.exports = routes;