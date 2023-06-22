require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api', require('./api/routes/donationRoutes'));
  
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = server;
