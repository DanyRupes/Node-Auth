require('dotenv').config({ path: '.env' }) //node -r dotenv/env server.js  remove dotenv from file run with preload
const express = require("express");
const app = express();
const path = require("path");
const auth = require('./routes/v1/auth')
const profile = require('./routes/v1/profile')
// const checkJwt = require('./middleware/auht0-jwt').checkJwt()
const axios  = require('axios')


// app.use(express.static(path.join (__dirname+'/client/build')));
// require('./routes/v1/auth')(app)
// app.use(checkJwt)

// require('./routes/v1/')(app)

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');


const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-dany.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://dev-dany.auth0.com/api/v2/',
  issuer: `https://dev-dany.auth0.com/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz([ 'read:messages' ]);

app.get('/profile', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});

app.get('/genToken',async (req, res)=>{
    let token = await axios.post('https://dev-dany.auth0.com/oauth/token',{
        "grant_type":"client_credentials" ,
        "scope":"read:users",
       "client_id": "NXy9uBtaoI3r6QBAGB0fckuk0iiNpF8x",
       "client_secret": "kCkOl5luh_vYd7Fj0dGq4L5fGl3IRWrg-L82B9LBLQTkaiXKcAossnZth-0dM-iA",
       "audience": "https://dev-dany.auth0.com/api/v2/"
   }, {headers:{'Content-Type':'application/json'}})

   res.send(token.data)
})

// routes - main
const PORT = process.env.PORT;

app.listen(PORT, console.log(`http://localhost:${PORT}`, process.env.NODE_ENV));
