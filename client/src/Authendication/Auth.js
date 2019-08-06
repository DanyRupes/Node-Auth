import auth0 from 'auth0-js';
import axios from 'axios'
import history from '../history';


export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: 'dev-dany.auth0.com',
    clientID: 'r6eieYMTz3CZQ6NTZjIO89cU0fAx7TIb',
    redirectUri:  'http://localhost:3000/login_success/',
    audience: 'https://dev-dany.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile email  '
  });

  login = () => {
    this.auth0.authorize();
  }


  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult, window.location)
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        window.location.href = '/galary'
      } else if (err) {
        // window.location.href = '/'
        console.log(err);
      }
    });
  }


  setSession = (authResult) => {

    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('name', authResult.idTokenPayload.nickname);
    localStorage.setItem('avatar', authResult.idTokenPayload.picture);
  }


  logout = () => {

    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('name');
    localStorage.removeItem('avatar');
    // history.replace('/');
  }



  isAuthenticated = async () => {

    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    let exTime =  new Date().getTime() < expiresAt;

    try{
      // let auth = await axios.get('/auth', {headers:await headers()})
      return true
    }
    catch(err){
      console.log("Errr",err)
      return false

    }
  }

  getAccessToken() {
		const accessToken = localStorage.getItem('access_token');
		if (!accessToken) {
			throw new Error('No access token found');
		}
		return accessToken;
	}
}
