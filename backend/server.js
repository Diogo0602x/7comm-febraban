require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/donations', require('./api/routes/donationRoutes'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});