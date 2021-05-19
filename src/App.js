import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import Home from './components/Home';
import Login from './registrations/Login';
// import GameList from './components/GameList';
import GameContainer from './containers/GameContainer';
import { autoLogin, logout } from './redux/actions/userActions';
// import GameForm from './components/GameForm';
// import UserHome from './components/UserHome';


// render user login, signup, signout:
  // once logged in, games list /games
  // new game /game/new
  // view one a game /game/:id

class App extends Component {

  componentDidMount() {
    localStorage.token && this.props.autoLogin()
  }

  render() {

    return (
      <div>
        <h2>Track My Games</h2>
        { this.props.user.id ? 
        
        <div>
          <Switch>
              {/* LOAD GAMES FROM USER ID ONLY */}
            {/* <Route exact path='/games' component={ GameList } /> */}
            <Route path='/games' component={ GameContainer } />
            {/* <Route exact path='/games/new' component={ GameForm } /> */}
          </Switch>
          <button onClick={this.props.logout}>Logout</button>
        </div>
          : 
          <Login />
          }
      </div>
    );
  }


}


const mapStateToProps = (state) =>( {
  user: state.user,
  // games: state.user.games
})

export default connect(mapStateToProps, { autoLogin, logout })(App);
