import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = (props) => {

    const handleClick = () => {
        axios.delete('http://localhost:3000/logout', {
            withCredentials: true
        })
        .then( response => {
            props.handleLogout()
            props.history.push('/')
        })
        .catch( error => console.log(error) )
    }

    return (
        <div>
            
        </div>
    )
}


export default Home;