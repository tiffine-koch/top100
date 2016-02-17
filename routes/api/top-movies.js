'use strict';

var express = require('express');

var topMovies = require('../../lib/scrapers/tpb/top-movies');

var router = express.Router();

router.get('/top-movies', (req, res, next) => {
  topMovies((err, movies) => {
    if(err) {
      return next(err);
    }
    console.log(movies);
    res.json({ movies: movies });
  });
});

module.exports = router;
