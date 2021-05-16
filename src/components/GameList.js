import React, { Component } from 'react';
import { getGame } from '../redux/actions/gameActions';
import { connect } from 'react-redux';
import { GameItem } from 'GameItem';


class GameList extends Component {
    componentDidMount() {
        this.props.getGame()
    }

    render() {
        return (
            <div>
                <ul>
                    <h1>GameList Here.</h1>
                    {this.props.game.map( g => <GameItem game={g} /> )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps, { getGame })(GameList);