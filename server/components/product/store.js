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

const remove = (product) => {
  const existingProduct = validateSku(product);
  if (existingProduct) {
    const index = products.indexOf(existingProduct);
    if (index > -1) {
      products.splice(index, 1);
    }
    return 'Producto eliminado';
    
  }
  return 'El sku ingresado no existe'
}

const edit = (product) => {
  const existingProduct = validateSku(product);
  if (existingProduct) {
    const index = products.indexOf(existingProduct);
    if (index > -1) {
      products[index] = product;
    }
    return 'Producto editado';
    
  }
  return 'El sku ingresado no existe'
}

module.exports = {
  find,
  add,
  remove,
  edit
};