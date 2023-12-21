/**
 * Express-validator configuration for validating Rental Agreement insertion and update.
 * @module Validations/RentalAgreement-Validator
 */

const { check } = require("express-validator");

/**
 * Validation rules for inserting a new rental agreement.
 * @constant
 * @type {Array}
 * @name insertRentalAgreementValidation
 */
const insertRentalAgreementValidation = [
  check("User_ID").notEmpty().withMessage("Please enter the user ID"),
  check("User_ID").isNumeric().withMessage("Please enter a valid user ID"),
  check("Car_ID").notEmpty().withMessage("Please enter the car ID"),
  check("Car_ID").isNumeric().withMessage("Please enter a valid car ID"),
  check("Pick_up_date").isEmpty().withMessage("Please enter a pick up date"),
  check("Pick_up_Date").isDate().withMessage("Please enter a valid date"),
  check("Return_date").isEmpty().withMessage("Please enter a return date"),
  check("Return_Date").isDate().withMessage("Please enter a valid date"),
];

/**
 * Validation rules for updating an existing rental agreement.
 * @constant
 * @type {Array}
 * @name updateRentalAgreementValidation
 */
const updateRentalAgreementValidation = [
  check("Pick_up_date").isEmpty().withMessage("Please enter a pick up date"),
  check("Pick_up_Date").isDate().withMessage("Please enter a valid date"),
  check("Return_date").isEmpty().withMessage("Please enter a return date"),
  check("Return_Date").isDate().withMessage("Please enter a valid date"),
];
module.exports = {
  insertRentalAgreementValidation,
  updateRentalAgreementValidation,
};
