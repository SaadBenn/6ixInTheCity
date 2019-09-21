const express = require('express')

const app = express() 
const port = 3000

app.get('/', (req, res) => res.send('6ix In The City'))

app.listen(port, () => console.log('Server running on port 3000'))