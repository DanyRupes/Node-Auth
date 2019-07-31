
const admin = require('./admin')
const auth = require('./auth')
const passport = require('passport')
const path = require('path')
module.exports = app =>{

    // company site
    app.get("/", (req, res, next) => {res.sendFile(`${path.join(__dirname, '../../views/home.html')}`)})
    
    
    // Admin
    app.get('/view/users',admin.viewUser)
    app.get('/dashboard', admin.dashboard_home)
    
    // Customer
    app.get('/login', passport.authenticate('auth0', {scope: 'openid email profile', successRedirect:'/'}))
    app.post('/login', auth.login)
    app.get('/login_success', auth.login_success)
    app.get("/logout", auth.logout)
    





    // Error
    app.get("*", (req, res) => {res.sendFile(`${path.join(__dirname, '../../views/error.html')}`)})
}

