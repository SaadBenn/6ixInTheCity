## Instructions to run the server

Run `npm install` to install modules on your local machine

### To run the server
 `npm start`, will boot up server on port 2000

 Here is the link: `http://localhost:2000`

 ### To get the menu from the database - endpoint

 Hit this endpoint: `http://localhost:2000/meals/menu`

 ### To add an item - make a post request

 Hit this endpoint with the following structure for the body: `http://localhost:2000/meals/add`

 POST
`{
	"title": "dessert",
	"ingredients": [ "oil", "carlo"],
	"price": "12"
}`

 


