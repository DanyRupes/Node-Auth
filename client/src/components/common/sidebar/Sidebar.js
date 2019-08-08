import React, { Component } from 'react';
import MenuContainer from './MenuContainer'
import './Sidebar.css'
import MenuButton from './MenuButton';
export default class Sidebar extends Component {

    state = { showContainer: false }

    onMouseDown = () => {
        this.setState({ showContainer: !this.state.showContainer })
    }

    render() {
        let { showContainer } = this.state

        return (
            <div className="side-container">
                <MenuButton onMouseDown={this.onMouseDown} />
                {showContainer ? <MenuContainer onMouseDown={this.onMouseDown} /> : (null)}
            </div>
        )
    }
}