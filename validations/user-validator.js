/**
 * Express-validator configuration for validating User insertion and update.
 * @module Validations/User-Validator
 */

const { check } = require("express-validator");

/**
 * Validation rules for inserting a new user.
 * @constant
 * @type {Array}
 * @name insertUserValidation
 */
const insertUserValidation = [
  check("Name").notEmpty().withMessage("first name is required"),
  check("Last_Name").notEmpty().withMessage("Last Name is required"),
  check("password").notEmpty().withMessage("The password field is required"),
  check("password").isLength({ min: 6 }).withMessage("Your password is too short"),
  check("password").isStrongPassword().withMessage("Your password is too weak and must contain upper and lowercase letters and numbers"),
  check("Phone").notEmpty().withMessage("You must enter your phone number"),
  check("Phone").isLength({ min: 8, max: 12 }).withMessage("Your phone number must be at least 8 numbers or starting with (+) followed by your country code"),
  check("Email").isEmail().withMessage("Wrong Email format."),
];

/**
 * Validation rules for updating an existing user.
 * @constant
 * @type {Array}
 * @name updateUserValidation
 */
const updateUserValidation = [
  check("Name").notEmpty().withMessage("first name is required"),
  check("Last_Name").notEmpty().withMessage("Last Name is required"),
  check("password").notEmpty().withMessage("The password field is required"),
  check("password").isLength({ min: 6 }).withMessage("Your password is too short"),
  check("password").isStrongPassword().withMessage("Your password is too weak and must contain upper and lowercase letters and numbers"),
  check("Phone").notEmpty().withMessage("You must enter your phone number"),
  check("Phone").isLength({ min: 8, max: 12 }).withMessage("Your phone number must be at least 8 numbers or starting with (+) folloed by your country code"),
  check("Email").isEmail().withMessage("Wrong Email format."),
];

module.exports = {
  insertUserValidation,
  updateUserValidation,
};
