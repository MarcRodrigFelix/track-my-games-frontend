import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import GamePage from './GamePage';
import Button from 'react-bootstrap/Button';


const GameRow = (props) => {

    const game = props.game
    
    return (
        <tr>
            <td>{game.title}</td>
            <td>{game.platform}</td>
            <td>{game.kind}</td>
            <td>{game.is_completed ? 'Finished' : 'Not Finished'}</td>
            <td><Button variant="danger" onClick={() => ( this.props.handleOnClick(game.id) )}>Delete</Button></td>
            <td><Link to={`/games/${game.id}`} style={{ textDecoration: 'none'}}>Page</Link></td>
        </tr>
    )

}

export default GameRow;