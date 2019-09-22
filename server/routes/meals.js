const express = require('express');
const router = require('express-promise-router')();

const {validateBody, mealSchema} = require('../helpers/routeHelpers');
const mealsController = require('../controllers/meals')

console.log('IN routes');

router.route('/menu')
	.get(validateBody(mealSchema.authSchema), mealsController.meals);

console.log("Before add call");
router.route('/add')
    .post(validateBody(mealSchema.authSchema), mealsController.add);

console.log('After add call');

module.exports = router;