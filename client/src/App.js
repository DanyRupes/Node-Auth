import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Blogs from './components/Blogs/Blogs';

class App extends React.Component {



  render() {
    return (
      <Switch>
          <div className="App">
            <header className="App-header">
              <a href='/login'>
                <h1>Do Auth0 Login</h1>
              </a>
              <div style={{display:'flex', justifyContent:'space-between', minWidth:'35rem'}}>
                <Link to="/home" >Home</Link>
                <Link to="/blogs">Blogs</Link>
                <a href="/login" >Login</a>
                <a href="/signup" >Signup</a>
                <a href="/logout" >Logout</a>
              </div>
            </header>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/blogs" component={Blogs} />
          </Switch>
          </div>
        </Switch>
    );
  }
}
export default App;
