const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/',  (req, res) => {
  const response = controller.getOrder();
  res.status(response.code).send({
    error: response.error,
    body: response.body,
  });
});

router.post('/', (req, res) => {
  const response = controller.addOrder(req.body);
  res.status(response.code).send({
    error: response.error,
    body: response.body,
  });
});

router.delete('/', (req, res) => {
  const response = controller.removeOrder(req.body);
  res.status(response.code).send({
    error: response.error,
    body: response.body,
  });
});

router.patch('/', (req, res) => {
  const response = controller.editOrder(req.body);
  res.status(response.code).send({
    error: response.error,
    body: response.body,
  });
});

module.exports = router;