import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import GameContainer from './containers/GameContainer';
import { autoLogin, logout } from './redux/actions/userActions';
import UserContainer from './containers/UserContainer';
import GameForm from './components/GameForm';
import GamePage from './components/GamePage';
import Button from 'react-bootstrap/Button';


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
                <Route path='/games/:id' component={ GamePage }/>
                <Route exact path='/newgames' component={ GameForm } />
                <Route path='/games' component={ GameContainer } />
                <Route exact path='/' component={ UserContainer } />
            </Switch>
           <Button onClick={this.props.logout} className="buttons" variant="warning" >Logout</Button>
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
  games: state.user.games
})

export default connect(mapStateToProps, { autoLogin, logout })(App);
