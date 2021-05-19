import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitNewGame, handleGameFormChange } from '../redux/actions/userActions';
;
class GameForm extends Component {



    render() {
        const { title, kind, platform, is_completed, submitNewGame, handleGameFormChange } = this.props
console.log(this.props)


        return (
            <div>
                <h2>Start Tracking A New Game</h2>
                <div>
                    <form onSubmit={submitNewGame} >
                        <input type="text"  name="title" value={title} onChange={handleGameFormChange} />
                        <br />
                        <input type="text"  name="platform" value={platform}  onChange={handleGameFormChange} />
                        <br />
                        <input type="text"  name="kind" value={kind}  onChange={handleGameFormChange} />
                        <br />
                        <label>Game Finished:
                            <input type="checkbox" name="isCompletedTrue" value={is_completed} defaultChecked={is_completed} /> (check box if finshed)
                        </label>
                        <br />
                        <button type="submit" >Track Game</button>
                    {title}
                    </form>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    gameForm: state.gameForm
})

export default connect(mapStateToProps, { submitNewGame, handleGameFormChange })(GameForm);