import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GamePage from './GamePage';
import { addSelectedGame } from '../redux/actions/userActions';

class GameRow extends Component {
    render() {
        const game = this.props.game
        
        return (
            <tr>
                <td>{game.title}</td>
                <td>{game.platform}</td>
                <td>{game.kind}</td>
                <td>{game.is_completed ? 'Finished' : 'Not Finished'}</td>
                <td><button onClick={() => ( this.props.handleOnClick(game.id) )}>Delete</button></td>
                <td><button onClick={() => ( this.props.addSelectedGame(game.id) )} >Click Me</button></td>
            </tr>
        )
    }
}

export default connect(null, { addSelectedGame } )(GameRow);