/**
 * Express Router for login-related routes.
 * @namespace loginRouter
 * @memberof module:Routes/Login
 */
const express = require('express')
const router = express.Router()

/**
 * Render the login page.
 * @name get/index
 * @memberof module:Routes/Login~loginRouter
 * @function
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */router.get('/', (req, res) => {
  res.render('login'); 
});

module.exports = router