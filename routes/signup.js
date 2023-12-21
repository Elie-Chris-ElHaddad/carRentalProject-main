const express = require('express')
const {addUser} = require('../Services/user.js')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('signup/index')
})

// router.post('/', async (req, res) => {
//     // const user = addUser(req.body.Name, req.body.Last_Name, req.body.Email , req.body.Phone, req.body.password);
//     // if (user) {
//     //     res.render('index')
//     // } else {
//     //     res.send('akalna khara')

// })

module.exports = router