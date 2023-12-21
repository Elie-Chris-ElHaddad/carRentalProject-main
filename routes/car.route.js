/**
 * Express Router for handling car-related routes.
 * @module routes/car.route
 */
const express = require('express');
const carController = require('../Controllers/carController');
const { insertCarValidation, updateCarValidation } = require('../validations/car-validator');

/**
 * Express router to handle car-related routes.
 * @type {object}
 * @const
 * @namespace carRouter
 */
const router = express.Router();

/**
 * Route to get all cars.
 * @name get/allCars
 * @function
 * @memberof module:Routes/Car~carRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/getAllCars',carController.getAllCarsController);

/**
 * Route to get car by ID.
 * @name get/carById
 * @function
 * @memberof module:Routes/Car~carRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/getCarById',carController.getCarByIdController);

/**
 * Route to add a new car.
 * @name post/addCar
 * @function
 * @memberof module:Routes/Car~carRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.post('/addCar',insertCarValidation, carController.addCarController);

/**
 * Route to update an existing car.
 * @name patch/updateCar
 * @function
 * @memberof module:Routes/Car~carRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.patch('/updateCar', updateCarValidation, carController.updateCarController);

/**
 * Route to delete a car by ID.
 * @name delete/deleteCar
 * @function
 * @memberof module:Routes/Car~carRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.delete('/deleteCar', carController.deleteCarController);

//Exports the carRouter for use in other modules.
module.exports = router;
