// import React, { Component } from 'react';
import { connect } from 'react-redux';
import React, { useEffect} from 'react';
import { addSelectedGame } from '../redux/actions/userActions';
import Button from 'react-bootstrap/Button';


export const GamePage = (props) => {

  useEffect(() => {
    props.addSelectedGame(props.match.params.id)
  })

  const { title, platform, kind, completed } = props.selectedGame


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
        <Button onClick={() => (props.history.goBack())} >Go Back</Button>
      </div>
    )
}

const mapStateToProps = (state) => ({
  selectedGame: state.user.selectedGame,
})

export default connect( mapStateToProps , { addSelectedGame } )(GamePage);