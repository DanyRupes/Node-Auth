require('dotenv').config({ path: '.env' }) //node -r dotenv/env server.js  remove dotenv from file run with preload
const express = require("express");
const app = express();
const axios  = require('axios')
const bodyParser = require('body-parser')
const path = require("path");
const checkJwt = require('./middleware/auht0-jwt').checkJwt()
const {AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_API_IDENTIFIER, MONGO_URI } = require('./config/keys')
const mongoose = require('mongoose')

try{
  mongoose.connect(MONGO_URI, {useNewUrlParser:true})
  console.log("DB connected")
}
catch(Er){return console.log("DB Error", Er)}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join (__dirname+'/client/build')));
require('./routes/v1/auth')(app)
app.use(checkJwt)
require('./routes/v1/')(app)

app.get('/genToken',async (req, res)=>{
    let token = await axios.post('https://dev-dany.auth0.com/oauth/token',
    {
     "grant_type":"client_credentials" ,
     "client_id": AUTH0_CLIENT_ID,
     "client_secret": AUTH0_CLIENT_SECRET,
     "audience": AUTH0_API_IDENTIFIER,
     "scope":"email",
    },
  {headers:{'Content-Type':'application/json'}})

   res.send(token.data)
})

// routes - main
const PORT = process.env.PORT;

app.listen(PORT, console.log(`http://localhost:${PORT}`, process.env.NODE_ENV));
