import React, { Component } from 'react';
import axios from 'axios'

class Profile extends Component {
    
   async componentDidMount(){
        let prof = await axios.get('/profile')
        if(prof){
            console.log(prof.data.details)
        }
    }

    render(){
        return(
            <h1>Profile</h1>
        )
    }
}

export default Profile