/**
 * Express Router for signup-related routes.
 * @namespace signupRouter
 * @memberof module:Routes/Signup
 */
const express = require('express')
const {addUser} = require('../Services/user.js')
const router = express.Router()

/**
 * Render the signup page.
 * @name get/index
 * @memberof module:Routes/Signup~signupRouter
 * @function
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */router.get('/', (req, res) => {
  res.render('signup/index')
})

module.exports = router