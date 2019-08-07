import React, { Component } from 'react';
import axios from 'axios'
import Header from '../reuse/header/header';
import Auth from '../../Authendication/Auth'

const auth = new Auth()
class Profile extends Component {
    
    state = {user:''}

    async componentDidMount() {
        try{
            let res = await axios.get('/profile', { headers: await auth.headers() })
            if (res.data) {
                let {user} = res.data.details
                this.setState({ user })
                console.log(user)
            }
        }
        catch(e){
            this.props.history.push('/')
        }
    }

    render(){
        let { user } = this.state
        return(
            <div>
            <Header/>
            <h1>Profile</h1>
            <h3>{user.email || 'Loading'}</h3>
        </div>
        )
    }
}

export default Profile