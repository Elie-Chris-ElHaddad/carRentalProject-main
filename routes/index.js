const express = require('express')
const router = express.Router()
const {verifyToken} = require('../Controllers/userController.js')

/**
 * Render the index page.
 * @name get/index
 * @memberof module:Routes/User~userRouter
 * @function
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/', (req, res) => {
  res.render('index')
})

/**
 * Render the dashboard page if the token is valid; otherwise, redirect to the login page.
 * @name get/dashboard
 * @memberof module:Routes/User~userRouter
 * @function
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */router.get('/dashboard', (req, res) => {
  // Extract the token from the query parameters
  const token = req.query.token
  // Verify the token
  const decoded = verifyToken(token)
  if(decoded){
    res.render('dashboard')
  }else{
    res.redirect('/login')
  }
})

/**
 * Render the Rental Agreement page.
 * @name get/RentalAgreement
 * @memberof module:Routes/User~userRouter
 * @function
 * @param {string} path - Express path.
 * @param {Callback} middleware - Express middleware.
 */
router.get('/RentalAgreement', (req, res) => {
  res.render('rentalAgreement')
});


module.exports = router