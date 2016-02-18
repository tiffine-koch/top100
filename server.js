'use strict';

var express = require('express');
var stormpath = require('express-stormpath');
// var topMovies = require('./routes/api/top-movies');
var api = require('./routes/api');

var app = express();

app.use(stormpath.init(app, {
  website: true,
  expand: {
    customData: true
    }
}));

app.use('/api', stormpath.apiAuthenticationRequired, api);

app.get('createapikey', stormpath.loginRequired, (req, res, next) => {
  req.user.createApiKey((err, key) => {
    res.json({ id: keyid, secret: key.secret});
  });
})
// app.get('/', (req, res, next) => {
//   res.user.href;
//   {
//     "product": "shazaam towel",
//     "user": req.user.href
//   }
// });
// app.get('/', stormpath.loginRequired, (req, res, next) => {
//   req.user.getCustomData((err, data) => {
//     console.log(data);
//     res.send("Hi" + req.user.fullName);
// });

app.on('stormpath.ready', () => {
  app.listen(process.env.PORT || 3000);
  console.log('server is ready');
});

/*
*API SPEC DISCUSSION
*
* GET mywebsite.com/api/top-movies //get a list of top movies
* POST mywebsite.com/api/top-movies //get a list of top movies
*/

// app.get('/', (req, res, next) => {
//   if(req.user) {
//     req.user.getCustomData((err, data) => {
//       if(err) {
//         return next(err);
//       }
//       data.favoriteColor = 'black';
//       data.address = {
//         city: 'Fremont',
//         school: 'Coding House'
//         };
//       data.save();
//     });
//     console.log(req.user);
//     res.send("Hi: " + req.user.givenName + '. You are now logged in!');
//   } else {
//     res.send("HEY! LOG IN PLZ");
//   }
// });
