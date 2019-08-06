import React, { Component } from 'react';
import Header from '../reuse/header/header';
import { Link } from 'react-router-dom'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleAuth = async (e) => {
        e.preventDefault()
        this.props.auth.login();
    }

    async componentDidMount() {
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', minWidth: '35rem', padding: '1em', fontSize: '20px' }}>
                    <a href="#" onClick={this.handleAuth}>
                         login
                    </a>
                    </div>
                </header>
                <h1>Welcome</h1>
            </div>
        )
    }
}
export default Main