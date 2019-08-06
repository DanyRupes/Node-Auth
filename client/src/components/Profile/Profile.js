import React, { Component } from 'react';
import axios from 'axios'
import Header from '../reuse/header/header';
import {headers} from '../../Authendication/header'
class Profile extends Component {
    
   async componentDidMount(){
    console.log(await headers())
        let prof = await axios.get('/profile', {headers:await headers()})
        if(prof){
            console.log(prof.data.details)
        }
    }

    render(){
        return(
            <div>
            <Header/>
            <h1>Profile</h1>
        </div>
        )
    }
}

export default Profile