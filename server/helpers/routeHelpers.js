const Joi = require('joi');
var util = require('util');

module.exports = {
    validateBody: (schema) => {
        console.log('in route helper');
        return(req, res, next) => {
            const result = Joi.validate(req.body, schema);
            // console.log(util.inspect(schema));
            // console.log(JSON.stringify(schema));
            if(result.error) {
                console.log('Error in validating schema in routes');
                return res.status(400).json(result.error);
            }
            //req.value.body instead of req.body
            //reason being this is a validated body
            if(!req.value) { 
                req.value = {}; 
                console.log('here');
            }
            req.value['body'] = result.value;
            // console.log(JSON.stringify(req.value['body']));
            // console.log(req.value.body);
            next();
        }
    },

    mealSchema: {
        authSchema: Joi.object().keys(),
            title: Joi.string().required(),
            ingredients: Joi.array().required(),
            price: Joi.string().required(),
    }
}