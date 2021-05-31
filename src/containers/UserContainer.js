// import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserCard from '../components/UserCard'
import UserProfile from '../components/UserProfile'
import Navbar from '../components/Navbar';


const UserContainer = (props) => {
    return (
        <div className="usercontainer-wrapper" >
            <UserCard user={props.user} />
            <UserProfile user={props.user} />
            < Navbar />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})


export default connect(mapStateToProps)(UserContainer);