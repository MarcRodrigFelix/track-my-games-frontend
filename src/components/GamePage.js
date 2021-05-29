import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSelectedGame } from '../redux/actions/userActions';


class GamePage extends Component {

  componentDidMount(){
    this.props.addSelectedGame(this.props.match.params.id)
  }


  render() {
console.log(this.props.selectedGame.id)
    return (
      <div className="gamepage-wrapper">
        <h3>Game Page</h3>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedGame: state.user.selectedGame
})

export default connect( mapStateToProps , { addSelectedGame } )(GamePage);