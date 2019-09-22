const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
* this file creates a model/schema for different endpoints
 */

const mealSchema = new Schema({
	food: {
		title: String,
		ingredients: Array,
		price: String
	}
});

//create a model
//first arguement is name of our model(always use a singular)
//mongoose takes the name and makes it plural
//second arguement is the schema we created 
const Meal = mongoose.model('meal', mealSchema)
//export the model
module.exports = Meal;
