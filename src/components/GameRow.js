import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GamePage from './GamePage';

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
                <td><button onClick={() => ( console.log(game.id))} >{ <Link to={`/games/${game.id}`} component={ GamePage }>Game Page</Link> }</button></td>
            </tr>
        )
    }
}

export default GameRow;