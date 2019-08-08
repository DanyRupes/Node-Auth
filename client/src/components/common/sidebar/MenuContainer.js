import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MenuContainer extends Component {


    render() {
        return (
            <div id="MenuContainer" onClick={this.props.onMouseDown} >

                <h2 style={{ fontWeight: '600', fontSize: '2.rem' }}>Menu</h2>
                <ul className="MenuItems">
                    <li>
                        <Link to="/gallary">
                            Gallary
                      </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            Dashboard
                      </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            Clients
                      </Link>
                    </li>

                    <li>
                        <Link to="/gallary">
                            Feedbacks
                      </Link>
                    </li>

                    <li>
                        <Link to="/gallary">
                            Help
                      </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuContainer