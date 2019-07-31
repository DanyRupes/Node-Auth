const path = require('path')
const passport = require('passport')
var util = require('util');
var url = require('url');
var querystring = require('querystring');
const { AUTH0_CLIENT_ID, AUTH0_DOMAIN} = require('../../config/keys')
module.exports = app => {
    
    const login_success = (req, res, next) => {
        passport.authenticate('auth0', function (err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function (err) {
                if (err) { return next(err) }
                // console.log(req.user)
                const returnTo = req.session.returnTo;
                delete req.session.returnTo;
                res.redirect('/dashboard');
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
        var logoutURL = new URL(
          util.format('https://%s/v2/logout', AUTH0_DOMAIN)
        );
        var searchString = querystring.stringify({
          client_id: AUTH0_CLIENT_ID,
          returnTo: returnTo
        });
        logoutURL.search = searchString;
      
        console.log(logoutURL)
        res.redirect(logoutURL);
    }

      // company site
    app.get("/", (req, res, next) => {res.sendFile(`${path.join(__dirname, '../../views/home.html')}`)})
      
      // Auth
    app.get('/login', passport.authenticate('auth0', { scope: 'openid email profile'}))
    app.get('/login_success', login_success)
    app.get("/logout", logout)
    
  
}


  // var request = require("request");

  // var options = {
//   method: 'POST',
//   url: 'https://dev-dany.auth0.com/dbconnections/signup',
//   headers: {'content-type': 'application/json'},
//   body :{
    //         "client_id": "lHtDGr6DpN7EzTRQbrqyjsrt5MKQOiRy",
//         "email": "test@gmail.com",
//         "password": "test123",
//         "connection": "MongoDB",
//         "name": "test",
//         "user_metadata": {"color": "red"}
//     },
//   json: true
// };




// var request = require("request");
// var options = { method: 'POST',
//   url: 'https://dev-dany.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json' },
//   body: '{"client_id":"8MhJ9fh7oMExoDbQ3QWyh0cXEZFIm7V4","client_secret":"IXEpsW7v-6Nk1KqntTPQmroW1E64oUJKLj0eRjjNE7j3gNU5-36DSoPyYKwM0Kdv","audience":"https://dev-dany.auth0.com/api/v2/","grant_type":"client_credentials"}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//   console.log(body);
// });