const { products } = require('../product/products');
const orders = 
[{
  id: '0',
  products: [
    1,
    2,
    3
  ],
  status: 'Pending'
}];

let autoincrement = 1;

const getOrder = (id) => {
  return orders.find(order => order.id === id);
};

const getProduct = (sku) => {
  return products.find(product => parseInt(product.sku) === sku);
};

const updateStock = (product) => {
  const index = products.indexOf(product);
  if (index > -1) {
    products[index].stock--;
  }
}

const hasStock = (product) => {
  return product.stock > 0;
}

const find =  () => {
  return orders;
};

const add = (order) => {
  let validOrder = true;
  order.products.forEach((sku, index) => {
    const product = getProduct(sku);
    if (product) {
      if (hasStock(product)) {
      } else {
        validOrder = false;
      }
    } else {
      validOrder = false;
    }
  });
  if (validOrder) {
    order.products.forEach((sku) => {
      const product = getProduct(sku);
      updateStock(product)
    });
    order.id = autoincrement;
    order.status = 'Pending'
    autoincrement++;
    orders.push(order);
    return order;
  }

  return 'La orden tiene productos sin stock'
}

const remove = (order) => {
  return 'remove'
}

const edit = (order) => {
  const existingOrder = getOrder(order.id)
  if (existingOrder) {
    const index = orders.indexOf(existingOrder);
    if (index > -1) {
      orders[index] = order;
    }
    return 'Orden Actualizada';
    
  }
  return 'La orden no existe'
}

module.exports = {
  find,
  add,
  remove,
  edit
};