import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import GamePage from './GamePage';
import { addSelectedGame } from '../redux/actions/userActions';
import Table from 'react-bootstrap/Table';


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
                <td><Link to={`/games/${game.id}`}>Game Page</Link></td>
            </tr>
        )
    }
}

export default GameRow;