import React, { Component } from 'react';
import { getGame } from '../redux/actions/gameActions';
import { connect } from 'react-redux';
import GameListItem from './GameListItem';


class GameList extends Component {
    componentDidMount() {
        this.props.getGame()
    }

    render() {

        const games = this.props.game.map( (g, i) => <GameListItem key={i} game={g} />)

        return (
            <div>
                {games}
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