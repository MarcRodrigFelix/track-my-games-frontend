// import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserCard from '../components/UserCard'
import UserProfile from '../components/UserProfile'


const UserContainer = (props) => {
    return (
        <div>
            <h1>Hello</h1>
            <UserCard user={props.user} />
            <UserProfile user={props.user} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})


export default connect(mapStateToProps)(UserContainer);