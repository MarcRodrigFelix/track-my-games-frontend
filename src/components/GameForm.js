import React, { Component } from 'react'

class GameForm extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            platform: '',
            kind: '',
            is_completed: false,
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   
    

    render() {
        const { title, kind, platform, is_completed } = this.state


        return (
            <div>
                <h2>Start Tracking A New Game</h2>
                <div>
                    <form>
                        <input type="text"  name="title" value={title} />
                        <input type="text"  name="platform" value={platform} />
                        <input type="text"  name="kind" value={kind} />
                        <input type="radio" name="is_completed" value={is_completed} />
                    </form>
                </div>
            </div>
        )
    }
}

export default GameForm;