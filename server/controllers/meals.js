const Meal = require('../models/meals');

const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

	meals: async(req, res, next) => {
		try {
			await Meal.find({}, function (err, meals) {
				if (err) {
					res.status(500).json({
						success: false,
						info: 'An error occured in the database query! ' + err.message,
						meals: null
					});
					next();
				} else {
					console.log("length of meals", meals.length)
					console.log(JSON.stringify(meals));
					res.status(200).json({
						success: true,
						info: "Successfuly retrieved the meals",
						meals: {
							"title": "OG Burger",
							"ingredients": ["oil", "tomatoes", "carlo"],
							"price": "$10",

							"title": "Poutine",
							"ingredients": ["oil", "tomatoes", "carlo"],
							"price": "$100",

							"title": "Pizza",
							"ingredients": ["oil", "tomatoes", "carlo"],
							"price": "$1",
						}

					});
				}
			});
		} catch (err) {
			res.status(500).json({
				success: false,
				info: err.message,
				meals: null
			});
		}
	}
};