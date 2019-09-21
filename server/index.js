const express = require('express')
import db from './stubDb/db';

// set up the express app
const app = express() 
const port = 3000

app.get('/', (req, res) => res.send('6ix In The City'))

app.get('/bill', (req, res) => {
	res.status(200).send({
		success: 'true',
		message: 'got the bill',
		bill: db
	})
});

app.listen(port, () => console.log(`Server running on port ${port}`))