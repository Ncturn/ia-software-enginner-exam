const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
router(app);
app.listen(3000, () => {
  console.log('server on');
});
