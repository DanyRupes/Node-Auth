// require('dotenv').config({path: '.env'}) //node -r dotenv/env server.js  remove dotenv from file run with preload
const express = require("express");
const app = express();
const passport = require("passport");
const passport_auth0 = require("passport-auth0");
const path = require("path");
var cookieParser = require("cookie-parser");
const session = require("express-session");

let {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_DOMAIN,
  MONGO_URI
} = require("./config/keys");


var sess = {
  secret: "$RYHG354354FU546fvju5%$#$%#*&buyfesd", 
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
  function(accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile);
    return done(null, profile);
  }
);

secureMyServer = (req, res, next) => {
        // console.log(req.user.id);
        if (!req.user) {
                res.redirect("/");
  } else {
        console.log("req.user)");
        // console.log(req.user);
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
require("./routes/v1/auth")(app);
app.use(secureMyServer);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));


// routes - main
require("./routes/v1")(app);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`http://localhost:${PORT}`, process.env.NODE_ENV));
