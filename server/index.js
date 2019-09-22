const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

const uri = "mongodb+srv://user1:<password>@cluster0-3mvfx.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

var db = mongoose.connection;


// set up the express app
const app = express(); 

// middlewares are run in sequence
app.use(cors());
app.use(morgan('dev'));
// parsing incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
console.log('before app.use in index.js')
app.use('/meals', require('./routes/meals'));
console.log('after app.use in index.js');

// start the server
const port = process.env.PORT || 2000;

var server = app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = server;
