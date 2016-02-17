'use strict';

var express = require('express');
var topMovies = require('./lib/scrapers/tpb/top-movies');

var app = express();

app.get('/', (req, res) => {
  res.json({hello: 'world'});
});

app.listen(process.env.PORT || 3000);

// topMovies(movies => {
//   console.log('movies', movies);
// });
