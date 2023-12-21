const { validationResult } = require("express-validator");
const {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
} = require("../Services/car");

/**
 * Retrieves all cars and sends a response with the retrieved cars.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllCarsController = async (req, res) => {
  try {
    // Retrieve all cars from the car service
    const cars = await getCars();
    // Send a JSON response with the retrieved cars
    res.status(200).json(cars);
  } catch (error) {
    // Log the error and send a 500 Internal Server Error response
    console.log(error);
    res.status(500).json({ message: "Internal error occurred" });
  }
};

/**
 * Retrieves a specific car by ID and sends a response with the retrieved car.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getCarByIdController = async (req, res) => {
  try {
    // Extract the Car_ID from the request body
    const { Car_ID } = req.body;
    // Retrieve the car by ID from the service
    const car = await getCarById(Car_ID);
    // Send a JSON response with the retrieved car
    res.status(200).json({ car });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json({ error });
  }
};

/**
 * Adds a new car to the database and sends a response with the newly added car.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const addCarController = async (req, res) => {
  // Validate the request body using express-validator
  const errors = validationResult(req.body);
  if (!errors.isEmpty()) {
    // If validation fails, send a 400 Bad Request response with validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Extract car details from the request body
    const { Year, Model, Make, Availability, Price_per_day } = req.body;
    // Add the new car to the database using the service
    const response = await addCar(
      Year,
      Model,
      Make,
      Availability,
      Price_per_day
    );
    // Send a JSON response with the newly added car
    res.redirect(`/dashboard`);
  } catch (e) {
    res.status(500).json({ e });
  }
};

/**
 * Updates an existing car in the database and sends a response with the updated car.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const updateCarController = async (req, res) => {
  // Validate the request using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If validation fails, send a 400 Bad Request response with validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  // Extract car details from the request body
  const { Car_ID, Year, Model, Make, Availability, Price_per_day } = req.body;
  try {
    // Update the existing car in the database using the service
    const response = await updateCar(
      Car_ID,
      Year,
      Model,
      Make,
      Availability,
      Price_per_day
    );
    // Send a JSON response with the updated car
    res.status(200).json({ response });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    return res.status(500).json(error);
  }
};

/**
 * Deletes a car from the database and sends a response with the deleted car.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const deleteCarController = async (req, res) => {
  try {
    // Extract Car_ID from the request body
    const { Car_ID } = req.body;
    // Check if Car_ID is missing in the request
    if (!Car_ID) {
      // If Car_ID is missing, send a 400 Bad Request response with a message
      return res.status(400).json({ message: "Missing Car_ID" });
    }
    // Delete the car from the database using the service
    const response = await deleteCar(Car_ID);
    // Send a JSON response with the deleted car
    res.status(200).json({ response });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json(error);
  }
};

// Export the controller functions for use in routes
module.exports = {
  getAllCarsController,
  addCarController,
  updateCarController,
  deleteCarController,
  getCarByIdController,
};
