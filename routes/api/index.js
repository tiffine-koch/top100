'use strict';

var express = require('express');

var topMovies = require('./movies');

var router = express.Router();

router.use('/top-movies', topMovies);

module.exports = router;
