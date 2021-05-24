const { products } = require('../product/products');
const orders = 
[{
  id: '0',
  products: [
    {
      sku: '1',
      name: 'Hambuerguesa',
      number: 2
    },
    {
      sku: '4',
      name: 'Tacos',
      number: 3
    },
    {
      sku: '5',
      name: 'Quesadilla',
      number: 1
    },
  ],
  status: 'Pendiente'
}];

let autoincrement = 1;

const getOrder = (id) => {
  return orders.find(order => order.id === id);
};

const getProduct = (sku) => {
  return products.find(product => parseInt(product.sku) === sku);
};

const updateStock = (product, number) => {
  const index = products.indexOf(product);
  if (index > -1) {
    products[index].stock = products[index].stock - number;
  }
}

const hasStock = (product, number) => {
  return (product.stock - number)  > 0;
}

const find =  () => {
  return orders;
};

const add = (order) => {
  let validOrder = true;
  order.products.forEach((productOrdered) => {
    const product = getProduct(productOrdered.sku);
    if (product) {
      if (hasStock(product, productOrdered.number)) {
      } else {
        validOrder = false;
      }
    } else {
      validOrder = false;
    }
  });
  if (validOrder) {
    const newOrder = { products: []};
    order.products.forEach((productOrdered) => {
      const product = getProduct(productOrdered.sku);
      updateStock(product, productOrdered.number)
      newOrder.products.push({
        ...productOrdered,
        name: product.name
      })
    });
    newOrder.id = autoincrement;
    newOrder.status = 'Pendiente'
    autoincrement++;
    orders.push(newOrder);
    return newOrder;
  }

  return 'La orden tiene productos sin stock'
}

const remove = (order) => {
  const existingOrder = getOrder(order.id);
  if (existingOrder) {
    const index = orders.indexOf(existingOrder);
    if (index > -1) {
      orders.splice(index, 1);
    }
    return 'Orden eliminada';
    
  }
  return 'La orden no existe no existe'
}

const edit = (order) => {
  const existingOrder = getOrder(order.id)
  if (existingOrder) {
    const index = orders.indexOf(existingOrder);
    if (index > -1) {
      orders[index].status = order.status;
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