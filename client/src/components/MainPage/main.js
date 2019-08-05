import React, { Component } from 'react';
import Header from '../reuse/header/header';

class Main extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <a href='/login'>
                        <h1>Do Auth0 Login</h1>
                    </a>
                    <div style={{flex:1,display: 'flex', justifyContent: 'space-between'}}>
                        <a href="/login" >Login | Signup</a>
                    </div>
                </header>
                <h1>Main Page</h1>
            </div>
        )
    }
}

export default Main