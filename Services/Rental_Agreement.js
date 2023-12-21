const {getCarById}  =  require('../Services/car');
const {getUserById} = require('../Services/user');
const RentalAgreement = require('../models/Rental_Agreement');

/**
 * Adds a new rental agreement to the database.
 *
 * @async
 * @param {number} User_ID - The ID of the user associated with the rental agreement.
 * @param {number} Car_ID - The ID of the car associated with the rental agreement.
 * @param {Date} Pick_up_Date - The date when the car is picked up for the rental.
 * @param {Date} Return_Date - The date when the car is returned after the rental.
 * @returns {Promise<Object>} Returns a Promise that resolves with the newly created rental agreement object in JSON format.
 * @throws {Error} Throws an error if there is an issue while adding the rental agreement.
 */
const addRentalAgreement=async(User_ID, Car_ID, Pick_up_Date, Return_Date)=>{
  try {
    const car = await getCarById(Car_ID);
    const Price_per_day = car.Price_per_day;
    const number_of_days = getDays(Pick_up_Date , Return_Date);
    const Total_Price = Price_per_day*number_of_days;
    const rentalAgreement = await RentalAgreement.create({
      User_ID,
      Car_ID,
      Pick_up_Date,
      Return_Date,
      Total_Price 
    });
    return rentalAgreement;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Retrieves a rental agreement by its ID from the database.
 *
 * @async
 * @param {number} Agreement_id - The ID of the rental agreement to retrieve.
 * @returns {Promise<Object>} Returns a Promise that resolves with the retrieved rental agreement object in JSON format.
 * @throws {Error} Throws an error if the rental agreement is not found or there is an issue while retrieving the rental agreement.
 */
const  getRentalAgreementById=async (Agreement_id)=>{
  try {
    const agreement = await RentalAgreement.findByPk(Agreement_id);
    if (!agreement) {
      throw new Error('agreement not found');
    }
    return agreement;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Retrieves all rental agreements from the database.
 *
 * @async
 * @returns {Promise<Array>} Returns a Promise that resolves with an array of rental agreement objects in JSON format.
 * @throws {Error} Throws an error if there is an issue while retrieving rental agreements.
 */
const  getAllRentalAgreements=async ()=>{
    try {
    const rentalAgreement = await RentalAgreement.findAll();
    if (!rentalAgreement) {
      throw new Error('Rental Agreement not found');
    }
    return rentalAgreement;
  } catch (error) {
    throw new Error('Error retrieving rental agreement');
  }
}

/**
 * Updates a rental agreement in the database.
 *
 * @async
 * @param {number} Agreement_id - The ID of the rental agreement to update.
 * @param {Date} newPick_up_Date - The new date when the car is picked up for the rental.
 * @param {Date} newReturn_Date - The new date when the car is returned after the rental.
 * @returns {Promise<Object>} Returns a Promise that resolves with the updated rental agreement object in JSON format.
 * @throws {Error} Throws an error if the rental agreement is not found or there is an issue while updating the rental agreement.
 */
const  updateRentalAgreement=async (Agreement_id, newPick_up_Date, newReturn_Date)=>{
  try {
    const rentalAgreement = await getRentalAgreementById(Agreement_id);
    console.log(rentalAgreement)
    rentalAgreement.Pick_up_Date = newPick_up_Date;
    rentalAgreement.Return_Date = newReturn_Date;
    const number_of_days = getDays(newPick_up_Date , newReturn_Date);
    const car = await getCarById(rentalAgreement.Car_ID);
    rentalAgreement.Total_Price = car.Price_per_day*number_of_days;
    await rentalAgreement.save();
    return rentalAgreement;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Deletes a rental agreement from the database.
 *
 * @async
 * @param {number} Agreement_id - The ID of the rental agreement to delete.
 * @throws {Error} Throws an error if the rental agreement is not found or there is an issue while deleting the rental agreement.
 */
const deleteRentalAgreement =async (Agreement_id)=>{
  try {
    const rentalAgreement = await getRentalAgreementById(Agreement_id);
    if (rentalAgreement){
      await rentalAgreement.destroy();
      return rentalAgreement.toJSON();
  }
  } catch (error) {
    throw new Error('Error deleting rental agreement');
  }
}

/**
 * Calculates the number of days between two dates.
 *
 * @param {Date} Pick_up_Date - The date when the car is picked up for the rental.
 * @param {Date} Return_Date - The date when the car is returned after the rental.
 * @returns {number} Returns the number of days between the two dates.
 */
const getDays = (Pick_up_Date, Return_Date) => {
  const start = new Date(Pick_up_Date)
  const end = new Date(Return_Date)
  const daysDifference = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  console.log('the amount of days')
  console.log(daysDifference);
  return daysDifference;
}

module.exports = {
getAllRentalAgreements,
  addRentalAgreement,
  getRentalAgreementById,
  updateRentalAgreement,
  deleteRentalAgreement,
}
