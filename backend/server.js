require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3000;

const path = require('path');

function authentication(req, res, next) {
	const authheader = req.headers.authorization;

	if (!authheader) {
		let err = new Error('Você não está autenticado!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

	const auth = new Buffer.from(authheader.split(' ')[1],
		'base64').toString().split(':');
	const user = auth[0];
	const pass = auth[1];

	if (user == process.env.CLIENT_ID && pass == process.env.CLIENT_SECRET) {

		next();
	} else {
		let err = new Error('Você não está autenticado!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}
}

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(authentication)

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/api', require('./api/routes/donationRoutes'));
  
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = server;
