


 const viewUser = async (req, res)=>{
        res.send({user:` ${req.user|| 'No user found'}`})
    }
    
const addProduct = async (req, res)=>{
        res.send({access:'added product'})
    }

    module.exports = {viewUser, addProduct}