const product = require('./components/product/network');

const routes = (server) => {
  server.use('/product', product);
};

module.exports = routes;