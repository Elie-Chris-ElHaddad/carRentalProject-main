const { validationResult } = require("express-validator");
const {
  addUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  checkLogin
} = require("../Services/user");


// app.use(express.json());

/**
 * Retrieves a specific user by ID and sends a response with the retrieved user.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getUserByIdController = async (req, res) => {
  try {
    // Extract the User_ID from the request body
    const { User_ID } = req.body;
    // Retrieve the user by ID from the service
    const user = await getUserById(User_ID);
    // Send a JSON response with the retrieved user information
    res.status(200).json({ user });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json({ error });
  }
};

/**
 * Retrieves all users from the database and sends a response with the retrieved users.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const getAllUsersController = async (req, res) => {
  try {
    // Retrieve all users from the service
    const users = await getAllUsers();
    // Send a JSON response with the retrieved users
    res.status(200).json(users);
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json({ message: "Internal error occurred" });
  }
};

/**
 * Adds a new user to the database and sends a response with the newly added user.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const addUserController = async (req, res) => {
  // Validate the request body using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If validation fails, send a 400 Bad Request response with validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Extract user details from the request body
    const { Name, Last_Name, Email, Phone, password } = req.body;
    console.log(req.body);
    // Add the new user to the database using the service
    const response = await addUser(Name, Last_Name, Email, Phone, password);
    // Send a JSON response with the newly added use
    // res.status(200).json({ response });
    res.redirect(`/home`);
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json({ error });
  }
};

/**
 * Updates an existing user in the database and sends a response with the updated user.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const updateUserController = async (req, res) => {
  // Validate the request using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If validation fails, send a 400 Bad Request response with validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Extract user details from the request body
    const { User_ID, Name, Last_Name, Email, Phone, password } = req.body;
    // Update the existing user in the database using the service
    const response = await editUser(
      User_ID,
      Name,
      Last_Name,
      Email,
      Phone,
      password
    );
    // Send a JSON response with the updated user
    res.status(200).json({ response });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message   
    res.status(500).json({ error });
  }
};

/**
 * Deletes a user from the database and sends a response with the deleted user.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const deleteUserController = async (req, res) => {
  try {
    // Extract User_ID from the request body
    const { User_ID } = req.body;
    // Check if User_ID is missing in the request
    if (!User_ID) {
      // If User_ID is missing, send a 400 Bad Request response with a message
      return res.status(400).json({ message: "Missing User_ID" });
    }
    // Delete the user from the database using the service
    const response = await deleteUser(User_ID);
    // Send a JSON response with the deleted user
    res.status(200).json({ response });
  } catch (error) {
    // Send a 500 Internal Server Error response with the error message
    res.status(500).json(error);
  }
};

const getUserLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await checkLogin(email, password);
    // res.status(200).json({ user });
    if(user){
      res.redirect(`/home`);
    }else{
      res.redirect(`/login`);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
const authenticateToken = async(req,res,next)=>{
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1];
  if (token==null) 
  return res.sendStatus(401)
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
    if (err) return res.sendStatus(403)
    req.user=user
    next()
})}
// Export the controller functions for use in routes
module.exports = {
  getUserByIdController,
  getAllUsersController,
  addUserController,
  updateUserController,
  deleteUserController,
  getUserLoginController,
  authenticateToken
};
