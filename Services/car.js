const Car = require('../models/Car');
const sequelize = require('sequelize');

/**
 * Adds a new car to the database.
 *
 * @async
 * @param {string} Year - The manufacturing year of the car.
 * @param {string} Model - The model of the car.
 * @param {string} Make - The make/brand of the car.
 * @param {boolean} Availability - The availability status of the car.
 * @param {number} Price_per_day - The rental price per day for the car.
 * @returns {Promise<Object>} Returns a Promise that resolves with the newly created car object in JSON format.
 * @throws {Error} Throws an error if there is an issue while adding the car.
 */
const addCar = async (Year, Model, Make, Availability, Price_per_day) => {
  try {
    const car = await Car.create({
      Year: Year,
      Model: Model,
      Make: Make,
      Availability: Availability,
      Price_per_day: Price_per_day,
    });
    return car;
  } catch (error) {
    console.log(error);
    throw new Error('Error adding a car');
  }
};

/**
 * Retrieves all cars from the database.
 *
 * @async
 * @returns {Promise<Array>} Returns a Promise that resolves with an array of car objects in JSON format.
 * @throws {Error} Throws an error if there is an issue while retrieving cars.
 */
const getCars=async()=>{
  try{
    const car = await Car.findAll();
    console.log(car);
    if (!car) {
      throw new Error('No cars are available');
    }
    return car;
  } catch (error) {
    throw new Error('Error retrieving car');
  }
}

/**
 * Retrieves a car by its ID from the database.
 *
 * @async
 * @param {number} Car_ID - The ID of the car to retrieve.
 * @returns {Promise<Object>} Returns a Promise that resolves with the retrieved car object in JSON format.
 * @throws {Error} Throws an error if the car is not found or there is an issue while retrieving the car.
 */
const getCarById=async(Car_ID)=> {
  try {
    const car = await Car.findByPk(Car_ID);
    if (!car) {
      throw new Error('Car not found');
    }
    return car;
  } catch (error) {
    throw new Error('Error retrieving car');
  }
}

/**
 * Updates a car in the database.
 *
 * @async
 * @param {number} Car_ID - The ID of the car to update.
 * @param {string} newYear - The new manufacturing year of the car.
 * @param {string} newModel - The new model of the car.
 * @param {string} newMake - The new make/brand of the car.
 * @param {boolean} newAvailability - The new availability status of the car.
 * @param {number} newPrice_per_day - The new rental price per day for the car.
 * @returns {Promise<Object>} Returns a Promise that resolves with the updated car object in JSON format.
 * @throws {Error} Throws an error if the car is not found or there is an issue while updating the car.
 */
const updateCar= async (Car_ID, newYear, newModel, newMake, newAvailability, newPrice_per_day)=> {
   try {
     const car = await getCarById(Car_ID);
     car.Year = newYear;
     car.Model = newModel;
     car.Make = newMake;
     car.Availability = newAvailability;
     car.Price_per_day = newPrice_per_day;
     car.save();
     return car;
   } catch (error) {
     throw new Error('Error editing car');
   }   
}

/**
 * Deletes a car from the database.
 *
 * @async
 * @param {number} Car_ID - The ID of the car to delete.
 * @returns {Promise<Object>} Returns a Promise that resolves with the deleted car object in JSON format.
 * @throws {Error} Throws an error if the car is not found or there is an issue while deleting the car.
 */
const deleteCar = async (Car_ID) => {
  try {
    const car = await Car.findByPk(Car_ID);
    if (car) {
      const deletedCar = await car.destroy();
      return deletedCar.toJSON();
    }
  } catch (error) {
    console.error(error);
  }
}


module.exports ={
  addCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
};