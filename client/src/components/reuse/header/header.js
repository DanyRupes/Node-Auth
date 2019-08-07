import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Auth from '../../../Authendication/Auth'
const auth = new Auth()
const Header = ()=>{
    return(
        <header className="App-header">
          <div style={{flex:1}}>
            <h2>Explorer</h2>
          </div>
        <div style={{flex:3,display:'flex', justifyContent:'space-evenly', minWidth:'35rem', padding:'1em', fontSize:'20px'}}>
          <Link to="/gallary" >Gallary</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={(e)=>auth.logout()}>Logout</Link>
        </div>
      </header>
    )
}

export default Header