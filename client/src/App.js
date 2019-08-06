import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/dash';
import Main from './components/MainPage/main';
import Auth from './Authendication/Auth'
import Callback from './Callback'

const auth = new Auth();



class App extends React.Component {
  
  constructor(props){
    super(props)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.state = {auth:'',isAuthenticated: false,isLoading: true}
  }




  async componentDidMount() {
    if(await auth.isAuthenticated()) this.setState({isAuthenticated:true, isLoading:false})
    console.log(this.props  )
  }

  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  }
  render() {
    const { isAuthenticated, isLoading} = this.state
    return (
      <Switch>
        <div className="App">
            <Route exact path="/" render={(props) => <Main model={Main} auth={auth} {...props} />} />
            <Route exact path="/login_success" render={(props) => {
              this.handleAuthentication(props);
              return <Callback {...props} />
            }}
            />
            <Route exact path="/galary" render={(props)=> <Home gal="gal" />} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
          
        </div>
      </Switch>
    );
  }
}
export default App;
