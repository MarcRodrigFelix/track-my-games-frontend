import React, { Component } from 'react'
import { connect } from 'react-redux';

class GameForm extends Component {

    render() {
        const { title, kind, platform, is_completed } = this.props
console.log(this.props.finished)


        return (
            <div>
                <h2>Start Tracking A New Game</h2>
                <div>
                    <form >
                        <input type="text"  name="title" value={title || 'Game Title'} />
                        <input type="text"  name="platform" value={platform || 'Platform Played On'}  />
                        <input type="text"  name="kind" value={kind || 'Kind of Game'}  />
                        <label>Game Finished:
                            <input type="checkbox" name="isCompletedTrue" value={is_completed} defaultChecked={is_completed} />
                        </label>
                        <button type="submit" >Track Game</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    // games: state.user.games
})

export default connect(mapStateToProps,)(GameForm);