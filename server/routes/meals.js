const express = require('express');
const router = require('express-promise-router')();

const {validateBody, mealSchema} = require('../helpers/routeHelpers');
const mealsController = require('../controllers/meals')

console.log('IN routes');

router.route('')
	.get(validateBody(mealSchema.authSchema), mealsController.meals);

console.log('After routes');

module.exports = router;