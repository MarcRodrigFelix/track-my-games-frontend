import React, { Component } from 'react';
import { connect } from 'react-redux';


class GamePage extends Component {

  componentDidMount(){
    console.log(this.props)
  }


  render() {

    return (
      <div>
        <h3>Visit Game Page</h3>
      </div>
    )
  }
}

export default GamePage;