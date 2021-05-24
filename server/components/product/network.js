const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/',  (req, res) => {
  const response = controller.getProduct();
  res.status(response.code).send({
    error: response.error,
    body: response.body,
  });
});

module.exports = router;