const path = require('path')
const passport = require('passport')

 const viewUser = async (req, res)=>{
        res.send({user:req.user})
    }
    
 const addProduct = async (req, res)=>{
        res.send({access:'added product'})
    }

 const dashboard_home  =  async (req, res, next) => {
     console.log(req.user.user_id)
    res.sendFile(`${path.join(__dirname, '../../views/dashboard.html')}`) 
    }


    module.exports = {viewUser, addProduct, dashboard_home}