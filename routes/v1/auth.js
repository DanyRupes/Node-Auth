const path = require('path')
const passport = require('passport')

const login = async (req, res, next) => {
  let auth_first = await  passport.authenticate('auth0', {
        scope: 'openid email profile'
      })  
}


const login_success = (req, res, next)=>{
    passport.authenticate('auth0', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            const returnTo = req.session.returnTo;
            delete req.session.returnTo;
            res.redirect('/dashboard');
        });
    })(req, res, next) 
}

const logout = async (req, res, next) => {
    req.logout()
    res.redirect('/login') 
  }
module.exports = {
    login, login_success, logout
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