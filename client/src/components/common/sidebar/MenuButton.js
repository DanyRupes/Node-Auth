import React, { Component } from 'react';
import { button } from 'reactstrap'
export default class MenuButton extends Component {


    render() {
        return (
            <div className="menu-btn" onMouseDown={this.props.onMouseDown} style={{display: "inline-block"}}>
                <div class="menu-btn-line"></div>
                <div class="menu-btn-line"></div>
                <div class="menu-btn-line"></div>
            </div>
        )
    }
}