const express = require('express')
const router = express.Router()
const {verifyToken} = require('../Controllers/userController.js')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/dashboard', (req, res) => {
  const token = req.query.token
  const decoded = verifyToken(token)
  if(decoded){
    res.render('dashboard')
  }else{
    res.redirect('/login')
  }
})

router.get('/RentalAgreement', (req, res) => {
  res.render('rentalAgreement')
});


module.exports = router