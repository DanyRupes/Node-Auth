const axios = require('axios')
const { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_CLIENT_SECRET } = require('../../config/keys')
const { validateEmail } = require('../../validation/AuthValidator')
const User = require('../../data/models/User')
const bcrypt = require('bcrypt')


const login = async(req, res)=>{
  let emailVal  =await validateEmail(req.body.email)
  if(!emailVal) return res.send("User is Not Found")

  let userf = await User.findOne({email:req.body.email})
  if(!userf) return res.status(404).send("Email Not Found")

    let userPass = await bcrypt.compare(req.body.password, userf.password)
    if(!userPass) return res.status(406).send("Password MisMatching") //not acceptable
    res.send("Login Success")
}

  const login_success = async (req, res) => {
    res.send("login success")
    // let token = await axios.post('https://dev-dany.auth0.com/oauth/token', {
    //   grant_type: 'client_credentials',
    //   client_id: AUTH0_CLIENT_ID,
    //   client_secret: AUTH0_CLIENT_SECRET,
    //   audience: 'https://dev-dany.auth0.com/api/v2/'
    // }, { headers: { 'content-type': 'application/json' }})
    // res.send({ token: token.data })

  }

  module.exports = app =>{
    app.get('/public', (req, res) => res.send("fine"))
    app.post('/login', login)
    app.get('/login_success', login_success)
  }


  
// const login_success = (req, res, next) => {
//   passport.authenticate('auth0', function (err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function (err) {
//       if (err) { return next(err) }
//       delete req.session.returnTo;
//       res.redirect('/#home');
//     });
//   })(req, res, next)
// }
