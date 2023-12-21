const { validationResult } = require("express-validator");
const {
  addRentalAgreement,
  getAllRentalAgreements,
  getRentalAgreementById,
  updateRentalAgreement,
  deleteRentalAgreement,
} = require("../Services/Rental_Agreement");

/**
 * Retrieves a specific rental agreement by ID and sends a response with the retrieved rental agreement.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getRentalAgreementByIdController = async (req, res) => {
  try {
    // Extract the Agreement_id from the request body
    const { Agreement_id } = req.body;
    // Retrieve the rental agreement by ID from the service
    const ra = await getRentalAgreementById(Agreement_id);
    // Send a JSON response with the retrieved rental agreement
    res.status(200).json({ ra });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json({error});
  }
};

/**
 * Retrieves all rental agreements from the database and sends a response with the retrieved agreements.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllRentalAgreementsController = async (req, res) => {
  try {
    // Retrieve all rental agreements from the service
    const rentalAgreements = await getAllRentalAgreements();
    // Send a JSON response with the retrieved rental agreements
    res.status(200).json(rentalAgreements);
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json({ message: "Internal error occurred" });
  }
};

/**
 * Adds a new rental agreement to the database and sends a response with the newly added agreement.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const addRentalAgreementController = async (req, res) => {
  // Validate the request body using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If validation fails, send a 400 Bad Request response with validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Extract rental agreement details from the request body
    const { User_ID, Car_ID, Pick_up_Date, Return_Date } = req.body;
    // Add the new rental agreement to the database using the service
    const response = await addRentalAgreement(
      User_ID,
      Car_ID,
      Pick_up_Date,
      Return_Date
    );
    // Send a JSON response with the newly added rental agreement
    res.status(200).json({ response });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json({error});
  }
};

/**
 * Updates an existing rental agreement in the database and sends a response with the updated agreement.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const updateRentalAgreementController = async (req, res) => {
  // Validate the request using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If validation fails, send a 400 Bad Request response with validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Extract rental agreement details from the request body
    const { Agreement_id, Pick_up_Date, Return_Date, Total_Price } = req.body;
    // Update the existing rental agreement in the database using the service
    const response = await updateRentalAgreement(
      Agreement_id,
      Pick_up_Date,
      Return_Date,
      Total_Price
    );
    // Send a JSON response with the updated rental agreement
    res.status(200).json({ response });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message   
    res.status(500).json({error});
  }
};

/**
 * Deletes a rental agreement from the database and sends a response with the deleted agreement.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const deleteRentalAgreementController = async (req, res) => {
  try {
    // Extract Agreement_id from the request body
    const { Agreement_id } = req.body;
    // Check if Agreement_id is missing in the request
    if (!Agreement_id) {
      // If Agreement_id is missing, send a 400 Bad Request response with a message
      return res.status(400).json({ message: "Missing Agreement_id" });
    }
    // Delete the rental agreement from the database using the service
    const response = await deleteRentalAgreement(Agreement_id);
    // Send a JSON response with the deleted rental agreement
    res.status(200).json({ response });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json({error});
  }
};

// Export the controller functions for use in routes
module.exports = {
  getRentalAgreementByIdController,
  getAllRentalAgreementsController,
  addRentalAgreementController,
  updateRentalAgreementController,
  deleteRentalAgreementController,
};
