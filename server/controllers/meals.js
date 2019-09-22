const Meal = require('../models/meals');

const ObjectId = require('mongoose').Types.ObjectId;
mealsJSON = [{
	"title": "OG Burger",
	"ingredients": ["oil", "tomatoes", "carlo"],
	"price": "10",

	"title": "Poutine",
	"ingredients": ["oil", "tomatoes", "carlo"],
	"price": "100",

	"title": "Pizza",
	"ingredients": ["oil", "tomatoes", "carlo"],
	"price": "1",
}]

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
						meals: mealsJSON

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
	},

	add: async (req, res, next) => {
        try {
            const query = {_id: new ObjectId(req.params.id)};
            console.log("HELLLLOOOO");
            await Meal.find(query, function (err, meals) {
                if (err) {
                    res.status(500).json({
                        success: false,
                        info: "An error occurred while executing the database query. " + err.message,
                        meals: null
                    });
                    next();
                } else {
                	console.log(JSON.stringify(req.body));
                	const { title, ingredients, price } = req.value.body;
                	const item = {
                		title: title,
                		ingredients: ingredients,
                		price: price
                	};
                	// 	title: req.body.title,
                	// 	ingredients: req.body.ingredients,
                	// 	price: req.body.price
                	// };
                    res.status(200).json({
                        success: true,
                        info: "Successfully added the item",
                        meals: mealsJSON.push(item)
                    })
                }
            })
        } catch(err){
            res.status(500).json({
                success: false,
                info: err.message,
                meals: null
            })
        }
    }
};