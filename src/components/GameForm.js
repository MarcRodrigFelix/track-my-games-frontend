import React, { Component } from 'react'
import { createNewGame } from '../redux/actions/gameActions';
import { connect } from 'react-redux';

class GameForm extends Component {
    state = {
        title: '',
        platform: '',
        kind: '',
        is_completed: false,
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.createNewGame(this.state)
    }



    render() {
        const { title, kind, platform, is_completed } = this.state


        return (
            <div>
                <h2>Start Tracking A New Game</h2>
                <div>
                    <form onSubmit={this.handleOnSubmit} >
                        <input type="text"  name="title" value={title} onChange={this.handleOnChange}/>
                        <input type="text"  name="platform" value={platform} onChange={this.handleOnChange} />
                        <input type="text"  name="kind" value={kind} onChange={this.handleOnChange} />
                        {/* <input type="checkbox" name="is_completed" value={is_completed} onChange={this.handleOnChange} defaultChecked={is_completed} /> */}
                        <button type="submit" >Create</button>
                    </form>
                    {title}
                    {platform}
                    {kind}
                    {/* {is_completed.toString()} */}
                </div>
            </div>
        )
    }
}

export default connect(null, { createNewGame })(GameForm);