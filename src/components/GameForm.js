import React, { Component } from 'react'
import { createNewGame } from '../redux/actions/gameActions';
import { connect } from 'react-redux';

class GameForm extends Component {
   


    render() {
//         const { title, kind, platform, is_completed } = this.state
// console.log(this.state)
console.log(this.props.finished)


        return (
            <div>
                <h2>Start Tracking A New Game</h2>
                <div>
                    {/* <form onSubmit={this.handleOnSubmit} > */}
                        {/* <input type="text"  name="title" value={title} onChange={this.handleOnChange}/>
                        <input type="text"  name="platform" value={platform} onChange={this.handleOnChange} />
                        <input type="text"  name="kind" value={kind} onChange={this.handleOnChange} /> */}
                        {/* <input type="checkbox" name="is_completed" value={is_completed} onChange={this.handleOnChange} defaultChecked={is_completed} /> */}
                        {/* <button type="submit" >Create</button> */}
                    {/* </form> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    // games: state.user.games
})

export default connect(mapStateToProps, { createNewGame })(GameForm);