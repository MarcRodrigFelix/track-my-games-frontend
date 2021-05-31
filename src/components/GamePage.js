// import React, { Component } from 'react';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { addSelectedGame } from '../redux/actions/userActions';


export const GamePage = (props) => {
console.log(props)
    // this.state = {
    //   gameComplete: false
    // }
  

  useEffect(() => {
    props.addSelectedGame(props.match.params.id)
  })

  const { id, title, platform, kind, completed, user } = props.selectedGame

  // handleOnClick = (event) => {
    // let isCompleted = props.selectedGame.isCompleted
    // this.setState( prevState => ({
    //   gameComplete: !prevState.gameComplete
    // // }))
    // this.props.toggleCheckboxChange(this.state.gameComplete)
// console.log(this.state.gameComplete)
  // }


  // render() {
    // const useToggle = (completed) => {
    //   const [ isToggled, setIsToggled ] = React.useState(completed)

    //   const toggle = React.useCallback(
    //     () => setIsToggled(state => !state),
    //     [setIsToggled]
    //   )

    //   return [ isToggled, toggle ]
    // }


    return (
      <div className="gamepage-wrapper">
        <h3>Game Page</h3>
        <div className="gamepage-div-wrapper">
          <p>{title}</p>
          <p>{platform}</p>
          <p>{kind}</p>
          <p>{completed ? "Finished" : 'Not finished'}
            {/* <button onClick={useToggle} > BUT </button> */}
          </p>
        </div>
        <button onClick={() => (props.history.goBack())} >Go Back</button>
      </div>
    )
  // }
}

const mapStateToProps = (state) => ({
  selectedGame: state.user.selectedGame,
})

export default connect( mapStateToProps , { addSelectedGame } )(GamePage);