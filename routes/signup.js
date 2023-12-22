const express = require('express')
const {addUser} = require('../Services/user.js')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('signup/index')
})

module.exports = router