import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserContainer extends Component {
    render() {
        return (
            <div>
                < UserCard />  
            </div>
        )
    }
}


export default connect()(UserContainer);