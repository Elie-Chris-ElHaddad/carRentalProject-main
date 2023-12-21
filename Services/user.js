const User  = require('../models/user');

/**
 * Adds a new user to the database.
 *
 * @async
 * @param {string} Name - The name of the user.
 * @param {string} Last_Name - The last name of the user.
 * @param {string} Email - The email address of the user.
 * @param {string} Phone - The phone number of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} Returns a Promise that resolves with the newly created user object in JSON format.
 * @throws {Error} Throws an error if there is an issue while adding the user.
 */
const addUser = async(Name,Last_Name, Email, Phone, password)=> {
   try {
     const user = await User.create({
       Name,
       Last_Name,
       Email,
       Phone,
       password,
     });
     return user;
   } catch (error) {
     throw new Error('Error adding a user');
   }
 }
 
/**
 * Retrieves a user by their ID from the database.
 *
 * @async
 * @param {number} User_ID - The ID of the user to retrieve.
 * @returns {Promise<Object>} Returns a Promise that resolves with the retrieved user object in JSON format.
 * @throws {Error} Throws an error if the user is not found or there is an issue while retrieving the user.
 */
const getUserById = async(User_ID)=> {
    try {
      const user = await User.findByPk(User_ID);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new Error('Error retrieving user');
    }
  }

/**
 * Retrieves all users from the database.
 *
 * @async
 * @returns {Promise<Array>} Returns a Promise that resolves with an array of user objects in JSON format.
 * @throws {Error} Throws an error if there is an issue while retrieving users.
 */  
const getAllUsers = async()=> {
  try {
    const user = await User.findAll();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error retrieving user');
  }
}

/**
 * Edits a user in the database.
 *
 * @async
 * @param {number} User_ID - The ID of the user to edit.
 * @param {string} newName - The new name of the user.
 * @param {string} newLast_Name - The new last name of the user.
 * @param {string} newEmail - The new email address of the user.
 * @param {string} newPhone - The new phone number of the user.
 * @param {string} newPassword - The new password of the user.
 * @returns {Promise<Object>} Returns a Promise that resolves with the updated user object in JSON format.
 * @throws {Error} Throws an error if the user is not found or there is an issue while updating the user.
 */
const editUser = async(User_ID, newName, newLast_Name, newEmail, newPhone, newPassword)=> {
  try {
    const user = await getUserById(User_ID);
    user.Name = newName;
    user.Last_Name = newLast_Name;
    user.Email = newEmail;
    user.Phone = newPhone;
    user.password = newPassword;
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Error editing user');
  }
}

/**
 * Deletes a user from the database.
 *
 * @async
 * @param {number} User_ID - The ID of the user to delete.
 * @throws {Error} Throws an error if the user is not found or there is an issue while deleting the user.
 */
const deleteUser = async(User_ID)=> {
  try {
    const user = await getUserById(User_ID);
    if(user){
      await user.destroy();
      return user.toJSON();
    }
  } catch (error) {
    throw new Error('Error deleting user');
  }
}

const checkLogin = async  (email , password) =>{
  try{
      const user = await User.findOne({ where: { email: email }});
      if(user &&  password === user.password){
        console.log(user);
        return user;
      }
  }catch(e){
      console.log(e);
  }
  return null;
}


module.exports = {
  addUser,
  getUserById,
  getAllUsers,
  editUser,
  deleteUser,
  checkLogin
}
