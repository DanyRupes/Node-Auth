const axios = require('axios')
const { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_CLIENT_SECRET } = require('../../config/keys')
const { validateEmail } = require('../../validation/AuthValidator')
const User = require('../../data/models/User')
const bcrypt = require('bcrypt')
const checkJwt = require('../../middleware/auht0-jwt').checkJwt()

  const login = async(req, res)=>{
    let {email} = req.body
    if(!email) return res.send("Email not found")
    let emailVal  =await validateEmail(email)
    if(!emailVal) return res.send("Email is not fine")
    
    // login
    let userID = req.user.sub
    let userf = await findUser({email, _id:userID})
    if(userf) return res.send({details:userf, msg:'LOGGED'})
    
    // create
    let newUser = await new User({email, _id:userID}).save()
      return res.send({details:newUser, msg:'SIGNEDUP'})
    }

  const login_success = async (req, res) => {
    res.send("login success")
  }


  // finding a user
  const findUser = async ({email})=>{return await User.findOne({email})}



  module.exports = app =>{
    app.get('/auth', (req, res)=>res.send("fine"))
    app.post('/login', login)
    app.get('/login_success', login_success)
  }








      // let token = await axios.post('https://dev-dany.auth0.com/oauth/token', {
    //   grant_type: 'client_credentials',
    //   client_id: AUTH0_CLIENT_ID,
    //   client_secret: AUTH0_CLIENT_SECRET,
    //   audience: 'https://dev-dany.auth0.com/api/v2/'
    // }, { headers: { 'content-type': 'application/json' }})
    // res.send({ token: token.data })

  
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
