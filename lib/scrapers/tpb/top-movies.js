'use strict';

var cheerio = require('cheerio');
var request = require('request');

const TPB_URL = 'https://thepiratebay.se/top/207';

function topMovies(callback) {
  request(TPB_URL, (err, resp, body) => {
    console.log(resp); //in node docs there's a pre-defined response + request object
    if(!err && resp.statusCode === 200) {
      var $ = cheerio.load(body);
      var movies = [];
      $('#content .detName a').each(function(index, element) {
        movies.push($(this).text());
        console.log(index, $(this).text());
      });
      callback(movies);
    }
  });
}

module.exports = topMovies;
