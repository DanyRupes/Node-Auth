const axios = require('axios')
const { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_CLIENT_SECRET } = require('../../config/keys')



  const login = async (req, res) => {
    let token = await axios.post('https://dev-dany.auth0.com/oauth/token', {
      grant_type: 'client_credentials',
      client_id: AUTH0_CLIENT_ID,
      client_secret: AUTH0_CLIENT_SECRET,
      audience: 'https://dev-dany.auth0.com/api/v2/'
    }, { headers: { 'content-type': 'application/json' }})
    res.send({ token: token.data })

  }

  module.exports = app =>{
    app.get('/public', (req, res) => res.send("fine"))
    app.get('/login', login)
  
  }