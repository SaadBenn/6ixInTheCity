const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* this file creates a model/schema for different endpoints
 */

console.log('before In the model');
const mealSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	ingredients: {
		type: Array,
		required: true	
	},
	price: {
		type: String,
		required: true
	}
});

console.log('after the model');

//create a model
//first arguement is name of our model(always use a singular)
//mongoose takes the name and makes it plural
//second arguement is the schema we created 
const Meal = mongoose.model('meal', mealSchema)
//export the model
module.exports = Meal;
