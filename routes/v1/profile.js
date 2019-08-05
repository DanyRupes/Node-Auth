
const jwtAuthz = require('express-jwt-authz')


const getDetailsScope = jwtAuthz(['read:client_grants'])


const getDetails = async (req, res) => {
    res.send({ details:{email:"stil", username:"st"} })
}


module.exports = { getDetails, getDetailsScope }