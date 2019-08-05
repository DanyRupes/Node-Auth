import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

const Header = ()=>{
    return(
        <header className="App-header">
        <div style={{display:'flex', justifyContent:'space-between', minWidth:'35rem'}}>
          <Link to="/home" >Home</Link>
          <Link to="/blogs">Blogs</Link>
          <a href="/profile" >Profile</a>
          <a href="/logout" >Logout</a>
        </div>
      </header>
    )
}

export default Header