const express = require('express')
const router = express.Router()

const jwt=require('jsonwebtoken') 

router.get('/posts', (req, res) => {
  res.json(jwt)
  res.render(posts.filter(post => post.email === req.user.email))
})


router.get('/', (req, res) => {
  res.render('login'); 
});


router.post('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
    const accessToken=jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken});
})


module.exports = router