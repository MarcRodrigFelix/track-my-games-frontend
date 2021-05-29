import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSelectedGame } from '../redux/actions/userActions';


class GamePage extends Component {

  componentDidMount(){
    this.props.addSelectedGame(this.props.match.params.id)
  }


  render() {
console.log(this.props)
    const { id, title, platform, kind, completed, user } = this.props.selectedGame
    return (
      <div className="gamepage-wrapper">
        <h3>Game Page</h3>
        <div className="gamepage-div-wrapper">
          <p>{title}</p>
          <p>{platform}</p>
          <p>{kind}</p>
          <p>{completed}</p>
        </div>
        <button onClick={() => (this.props.history.goBack())} >Go Back</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedGame: state.user.selectedGame
})

export default connect( mapStateToProps , { addSelectedGame } )(GamePage);