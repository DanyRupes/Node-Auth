import React, { Component } from 'react';
import Header from '../reuse/header/header';

class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default Home