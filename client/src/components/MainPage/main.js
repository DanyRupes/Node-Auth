import React, { Component } from 'react';


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
                        <a style={{ color: 'white' }} href="#" onClick={this.handleAuth}>
                            login
                    </a>
                    </div>
                </header>
                <h1>Welcome to Explorer</h1>
            </div>
        )
    }
}
export default Main