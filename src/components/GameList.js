import React, { Component } from 'react';
import { connect } from 'react-redux';
import getGame from '../redux/actions/gameActions'

class GameList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <h1>GameList Here.</h1>
                </ul>
            </div>
        )
    }
}


export default connect()(GameList);