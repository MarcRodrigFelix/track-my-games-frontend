// import React, { Component } from 'react'
import { connect } from 'react-redux';


const UserContainer = (props) => {
    return (
        <div>
            < UserCard user={props.user} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})


export default connect(mapStateToProps)(UserContainer);