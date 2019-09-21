const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

const port = process.env.PORT || 2000;

// set up the express app
const app = express(); 

// middlewares are run in sequence
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
// pasrsing the json object
app.use(bodyParser.json());
app.get('/', (req, res) => {
	res.status(200).send({
		success: 'true'
	})
});

var server = app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = server;