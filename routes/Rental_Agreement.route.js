/**
 * Express Router for handling rental agreement-related routes.
 * @module routes/Rental_Agreement.route
 */
const express = require('express');
const Rental_AgreementController=require('../Controllers/Rental_AgreementController');
const {insertRentalAgreementValidation,updateRentalAgreementValidation,} = require('../validations/rentalAgreement-validator');

/**
 * Express router to handle rental agreement-related routes.
 * @type {object}
 * @const
 * @namespace rentalAgreementRouter
 */
const router = express.Router();

/**
 * Route to get rental agreement by ID.
 * @name get/rentalAgreementById
 * @function
 * @memberof module:Routes/RentalAgreement~rentalAgreementRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/getRentalAgreementById',Rental_AgreementController.getRentalAgreementByIdController);

/**
 * Route to get all rental agreements.
 * @name get/allRentalAgreements
 * @function
 * @memberof module:Routes/RentalAgreement~rentalAgreementRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/getAllRentalAgreements', Rental_AgreementController.getAllRentalAgreementsController); 

/**
 * Route to add a new rental agreement.
 * @name post/addRentalAgreement
 * @function
 * @memberof module:Routes/RentalAgreement~rentalAgreementRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.post('/addRentalAgreement', insertRentalAgreementValidation, Rental_AgreementController.addRentalAgreementController);

/**
 * Route to update an existing rental agreement.
 * @name patch/updateRentalAgreement
 * @function
 * @memberof module:Routes/RentalAgreement~rentalAgreementRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.patch('/updateRentalAgreement', updateRentalAgreementValidation, Rental_AgreementController.updateRentalAgreementController);

/**
 * Route to delete a rental agreement by ID.
 * @name delete/deleteRentalAgreement
 * @function
 * @memberof module:Routes/RentalAgreement~rentalAgreementRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.delete('/deleteRentalAgreement', Rental_AgreementController.deleteRentalAgreementController);

//Exports the rentalAgreementRouter for use in other modules.
module.exports = router;
