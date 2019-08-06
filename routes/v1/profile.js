
const jwtAuthz = require('express-jwt-authz')


const getDetailsScope = jwtAuthz(['read:client_grants'])


const getDetails = async (req, res) => {
    res.send({ users:{email:"stil", username:"st"} })
}


module.exports = { getDetails, getDetailsScope }