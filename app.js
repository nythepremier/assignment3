// app.js

var express = require('express');
var path = require('path');
var users = require('./routes/users');
var bodyparser = require('body-parser');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: false}));

//User Routes
app.use('/users', users);

//Error handling Middleware
//Handle http 404 response
app.use((req, res) => {
   res.status(404).redirect('/404.html');
});

//Handle 500 response
app.use((req, res) => {
   res.status(500).redirect('/500.html');
});

module.exports = app;
