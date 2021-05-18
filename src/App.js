import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';
// import Home from './components/Home';
import Login from './registrations/Login';
// import Signup from './registrations/Signup';
// import GameList from './components/GameList';
import GameContainer from './containers/GameContainer';
// import GameForm from './components/GameForm';
// import UserHome from './components/UserHome';


// render user login, signup, signout:
  // once logged in, games list /games
  // new game /game/new
  // view one a game /game/:id

class App extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     isLoggedIn: false,
  //     user: {}
  //   }
  // }

  // componentDidMount() {
  //   this.handleLoginStatus()
  // }

  // handleLogin = (data) => {
  //   this.setState({
  //     isLoggedIn: true,
  //     user: data.user
  //   })
  // }

  // handleLogout = () => {
  //   this.setState({
  //     isLoggedIn: false,
  //     user: {}
  //   })
  // }

  // handleLoginStatus = () => {
  //   axios.get('http://localhost:3000/logged_in', {
  //     withCredentials: true
  //   })
  //   .then( response => {
  //     if (response.data.logged_in) {
  //       this.handleLogin(response)
  //     } else {
  //       this.handleLogout()
  //     }
  //   })
  //   .catch( error => console.log(error, ": ERROR"))
  // }

  // signUpHandler = (userObj) => {
  //   fetch('http://localhost:3000/users', {
  //     method: 'POST',
  //     headers: {
  //       accepts: 'application/json',
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify({ user: userObj })
  //   })
  //   .then(resp => resp.json())
  //   .then(data => this.setState({ user: data.user }))
  // }



  render() {
// console.log(this.props.user.games)
// console.log(this.props.games)

    return (
      <div>
        <h2>Track My Games</h2>
        { this.props.user.id ? 

          <Switch>
            {/* <Route exact path='/' render={ (props) => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} user={this.state.user} />
              )}
            /> */}
            {/* <Route path='/user' render={() => <UserHome user={this.state.user} /> }/> */}

            {/* <Route exact path='/login' render={ (props) => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}/> */}
            {/* <Route exact path='/signup' render={ (props) => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} signUpHandler={this.signUpHandler} />
              )}/> */}

              {/* LOAD GAMES FROM USER ID ONLY */}
            {/* <Route exact path='/games' component={ GameList } /> */}
            <Route path='/games' component={ GameContainer } />

              {/* <Route exact path='/games/new' component={ GameForm } /> */}
          </Switch>
          : 
          <Login />
          }
      </div>
    );
  }


}


const mapStateToProps = (state) =>( {
  user: state.user,
  games: state.user.games
})

export default connect(mapStateToProps)(App);
