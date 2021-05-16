import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      username: '',
      email: '',
      password: '',
      errors: ''
    }
  }

  componentDidMount() {
      return this.props.loggedInStatus ? this.redirect() : null
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:3000/login', { user }, { withCredentials: true })
    .then( response => {
      if (response.data.logged_in) {
// console.log(user)
// console.log(response.data.user.id)
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch( error => console.log('ERROR: ', error) )
  }


  redirect = () => {
    this.props.history.push('/')
  }
  

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            type="text" 
            name="username" 
            value={this.state.username}
            onChange={this.handleOnChange}
            placeholder="Username"
          /> <br />
          <input 
            type="text" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleOnChange}
            placeholder="Email"
          /><br />
          <input 
            type="password" 
            name="password" 
            value={this.state.password}
            onChange={this.handleOnChange}
            placeholder="Password"
          /><br />
          <input type="submit" value="Login"/>
          <br></br>
          <div><Link to='/signup'>Sign Up</Link></div>
        </form>
      </div>
    )
  }
}


export default Login;