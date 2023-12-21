const express = require('express')
const router = express.Router()

// router.get('/posts', (req, res) => {
//   res.json(jwt)
//   res.render(posts.filter(post => post.email === req.user.email))
// })

router.get('/', (req, res) => {
  res.render('login'); 
});

module.exports = router