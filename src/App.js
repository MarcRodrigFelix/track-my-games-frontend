import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Login from './registrations/Login';
import Signup from './registrations/Signup';
import GameList from './components/GameList';
import GameForm from './components/GameForm';
import UserHome from './components/UserHome';


// render user login, signup, signout:
  // once logged in, games list /games
  // new game /game/new
  // view one a game /game/:id

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
    axios.get('http://localhost:3000/logged_in', {
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
          <Switch>
            <Route exact path='/' render={ (props) => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            <Route exact path='/user/:id' component={UserHome} />
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/login' render={ (props) => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}/>
            <Route exact path='/signup' render={ (props) => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}/>
              <Route exact path='/game' component={ GameList } />
              <Route exact path='/game/new' component={ GameForm } />
          </Switch>
      </div>
    );
  }


}

export default App;
