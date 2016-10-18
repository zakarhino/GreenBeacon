// var helpers = require('./authHelpers');
var passport = require('passport');
var helpers = require('./routehelpers');

module.exports.router = (app) => {

  app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }), (req, res) => {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

  app.get('/callback', passport.authenticate('github', { failureRedirect: '/session' }), (req, res) => {
    console.log('SESSION:', req.session.passport);
    req.session.cookie.passport = req.session.passport;
    res.redirect('/#/tickets');
  });

  //app.get('/signin', (req, res) => {res.redirect('/signin');});

  app.get('/tickets', helpers.isLoggedIn, helpers.getTickets);

  app.post('/tickets', helpers.isLoggedIn, helpers.addToQueue);

  app.put('/claimed', helpers.isLoggedIn, helpers.tagClaimed);

  app.put('/solved', helpers.isLoggedIn, helpers.tagSolved);

  app.get('/signout', helpers.isLoggedIn, helpers.terminateSession);

};
