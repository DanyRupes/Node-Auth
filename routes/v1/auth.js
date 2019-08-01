const passport = require('passport')
var { URL } = require('url');
var querystring = require('querystring');

const { AUTH0_CLIENT_ID, AUTH0_DOMAIN } = require('../../config/keys')


const login_success = (req, res, next) => {
    passport.authenticate('auth0', function (err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function (err) {
        if (err) { return next(err) }
        delete req.session.returnTo;
        res.redirect('/#home');
      });
    })(req, res, next)
  }
  

  const logout = async (req, res, next) => {
    req.logout();
    var returnTo = req.protocol + '://' + req.hostname;
    var port = req.connection.localPort;
    if (port !== undefined && port !== 80 && port !== 443) {
      returnTo += ':' + port;
    }
    var logoutURL = new URL(`https://${AUTH0_DOMAIN}/v2/logout`);
    
    var searchString = querystring.stringify({
      client_id: AUTH0_CLIENT_ID,
      returnTo: returnTo
    });
    logoutURL.search = searchString;
    res.redirect(logoutURL);
  }
  
  
  module.exports = { login_success, logout }
