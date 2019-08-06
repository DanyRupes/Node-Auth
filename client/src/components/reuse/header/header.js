import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Auth from '../../../Authendication/Auth'
const auth = new Auth()
const Header = ()=>{
    return(
        <header className="App-header">
        <div style={{display:'flex', justifyContent:'space-between', minWidth:'35rem', padding:'1em', fontSize:'20px'}}>
          <Link to="/galary" >Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={(e)=>auth.logout()}>Logout</Link>
        </div>
      </header>
    )
}

export default Header