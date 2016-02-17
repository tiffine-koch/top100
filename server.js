'use strict';

var express = require('express');
var topMovies = require('./routes/api/top-movies');

var app = express();

app.use('/api', topMovies);

app.listen(process.env.PORT || 3000);

/*
*API SPEC DISCUSSION
*
* GET mywebsite.com/api/top-movies //get a list of top movies
* POST mywebsite.com/api/top-movies //get a list of top movies
*/
