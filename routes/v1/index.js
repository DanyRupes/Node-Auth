
const admin = require('./admin')


module.exports = app =>{
    // Admin
    app.get('/view/users',admin.viewUser)
    app.get('/login',admin.addProduct)


    // Customer
    
}

