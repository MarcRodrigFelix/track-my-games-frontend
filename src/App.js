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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}><h2>Track My Games</h2></Col>
            <Col></Col>
          </Row>
          
          { this.props.user.id ?
          <div>
          <Row>
          <Switch>
              <Route path='/games/:id' component={ GamePage }/>
              <Route exact path='/newgames' component={ GameForm } />
              <Route path='/games' component={ GameContainer } />
              <Route exact path='/' component={ UserContainer } />
          </Switch>
          </Row>
          <Row>
            <Col><Button onClick={this.props.logout}>Logout</Button></Col>
          </Row>
          </div>
            : 
            <Login />
            }

        </Container>
      </div>
    );
  }


}


const mapStateToProps = (state) =>( {
  user: state.user,
  games: state.user.games
})

export default connect(mapStateToProps, { autoLogin, logout })(App);
