/**
 * Express Router for handling user-related routes.
 * @module Routes/User
 */
const express = require('express');
const userController =require('../Controllers/userController');
const { insertUserValidation, updateUserValidation } = require('../validations/user-validator');

const router = express.Router();



router.get('/addUser', (req, res) => {
    res.render('addUser');
});

/**
 * Route to get user by ID.
 * @name get/userById
 * @memberof module:Routes/User~userRouter
 * @param {string} path - Express path.
 */
router.get('/getUserById', userController.getUserByIdController);

/**
 * Route to get all users.
 * @name get/allUsers
 * @memberof module:Routes/User~userRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/getAllUsers', userController.getAllUsersController);

/**
 * Route to create a user.
 * @name post/addUser
 * @memberof module:Routes/User~userRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.post('/addUser', insertUserValidation,  userController.addUserController);

/**
 * Route to handle user login.
 * @name post/getUserLogin
 * @memberof module:Routes/User~userRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.post('/getUserLogin' , userController.getUserLoginController);

/**
 * Route to update an existing user.
 * @name patch/updateUser
 * @memberof module:Routes/User~userRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.patch('/updateUser', updateUserValidation, userController.updateUserController);

/**
 * Route to update an existing user.
 * @name patch/updateUser
 * @memberof module:Routes/User~userRouter
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.delete('/deleteUser', userController.deleteUserController);


module.exports = router;
