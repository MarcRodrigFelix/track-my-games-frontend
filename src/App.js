import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Login from './registrations/Login';
import Signup from './registrations/Signup';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    this.handleLoginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  handleLoginStatus = () => {
    axios.post('http://localhost:3000/logged_in', {
      withCredentials: true
    })
    .then( response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch( error => console.log(error, ": ERROR"))
  }



  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={ (props) => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route exact path='/login' render={ (props) => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}/>
            <Route exact path='/signup' render={ (props) => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }


}

export default App;
