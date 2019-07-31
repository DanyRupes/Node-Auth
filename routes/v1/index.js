
const admin = require('./admin')
const auth = require('./auth')
const passport = require('passport')
const path = require('path')
module.exports = app =>{

  
    
    
    // Admin
    app.get('/view/users',admin.viewUser)
    app.get('/dashboard', admin.dashboard_home)
    
    // Customer
   
    


  // Error
  app.get("*", (req, res) => {res.sendFile(`${path.join(__dirname, '../../views/error.html')}`)})


    
}

