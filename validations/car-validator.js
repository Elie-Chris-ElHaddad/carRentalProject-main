/**
 * Express-validator configuration for validating Car insertion.
 * @module Validations/Car-Validator
 */

const { check } = require("express-validator");

/**
 * Validation rules for inserting a new car.
 * @constant
 * @type {Array}
 * @name insertCarValidation
 */
const insertCarValidation = [
  check("Year").custom((value) => {
    if (Year.length !== 4) {
      throw new Error("Year must be a 4-digit number");
    }
  }),
  check("Model").notEmpty().withMessage("The model parameter must be filled"),
  check("Make").notEmpty().withMessage("The make parameter must be filled"),
  check("Availabilty").notEmpty().withMessage("The availibility parameter must be filled"),
  check("Availability").isBoolean().withMessage("The availability parameter must be either true or false"),
  check("Price_per_day").notEmpty().withMessage("The price per day parameter must be filled"),
];

/**
 * Validation rules for updating an existing car.
 * @constant
 * @type {Array}
 * @name updateCarValidation
 */
const updateCarValidation = [
  check("Year").notEmpty().withMessage("The year must be filled"),
  check("Year").isLength({ min: 4, max: 4 }).withMessage("Year must be a 4-digit number"),
  check("Model").notEmpty().withMessage("The model parameter must be filled"),
  check("Make").notEmpty().withMessage("The make parameter must be filled"),
  check("Availability").isBoolean().withMessage("The availability parameter must be either true or false"),
  check("Price_per_day").notEmpty().withMessage("The price per day parameter must be filled"),
];

module.exports = {
  insertCarValidation,
  updateCarValidation,
};
