require('dotenv').config({ path: '.env' }) //node -r dotenv/env server.js  remove dotenv from file run with preload
const express = require("express");
const app = express();
const passport = require("passport");
const passport_auth0 = require("passport-auth0");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const auth = require('./routes/v1/auth')

let {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  AUTH0_SECRET
} = require("./config/keys");


var sess = {
  secret: AUTH0_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true
};


const autho_strategy = new passport_auth0(
  {
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/login_success"
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // console.log(profile);
    return done(null, profile);
  }
);

secureMyServer = (req, res, next) => {
  console.log(req.path)
  if (!req.user) {
    res.redirect('/login')
  } 
  else {
    next()
  }
};

// middlewares
passport.use(autho_strategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(session(sess));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
// require("./routes/v1/auth")(app);
app.get('/login', passport.authenticate('auth0', { scope: 'openid email profile' }))
app.get('/signup', (req, res)=>{
  var request = require("request");

var options = {
  method: 'POST',
  url: `https://${AUTH0_DOMAIN}/oauth/token`,
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  form: {
    grant_type: 'client_credentials',
    client_id: AUTH0_CLIENT_ID,
    client_secret: AUTH0_CLIENT_SECRET,
    audience: 'wifXHbgwF4A05rmbqRmdRy5b5r60C5Ch'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
})
app.get('/login_success', auth.login_success)
app.get("/logout", auth.logout)
app.use(secureMyServer);


require("./routes/v1")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes - main

const PORT = process.env.PORT;

app.listen(PORT, console.log(`http://localhost:${PORT}`, process.env.NODE_ENV));
