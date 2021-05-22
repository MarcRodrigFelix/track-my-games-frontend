import React, { Component } from 'react'

export default class UserCard extends Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        const { username, id } = this.props.user

        return (
            <div>
                <h3>Welcome {username} !!</h3>
            </div>
        )
    }
}

