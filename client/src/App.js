import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Blogs from './components/Blogs/Blogs';
import Main from './components/MainPage/main';

class App extends React.Component {


  componentDidMount(){

  }

  render() {
    return (
      <Switch>
          <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
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
