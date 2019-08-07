
const jwtAuthz = require('express-jwt-authz')
const User = require('../../data/models/User')

const getDetailsScope = jwtAuthz(['read:client_grants'])


const getDetails = async (req, res) => {
    let findUser = await User.findOne({_id:req.user.sub})
    let { email} = findUser
    res.send({ details:{user:{email}}})
}


module.exports = { getDetails, getDetailsScope }