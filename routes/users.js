//users.js
var express = require('express');
var router = express.Router();

//get homepage
router.get('/login', (req, res, next) => {
   res.render('login');
});

//post to dashboard page
router.post('/dashboard', (req, res) => {
  const {subject, blogpost} = req.body;
  res.render("dashboard",{"subject": req.body.subject, "blogpost": req.body.blogpost });
});

//default PUG page
router.get('/', (req, res)=> {
  res.render('index');
});

module.exports = router;
