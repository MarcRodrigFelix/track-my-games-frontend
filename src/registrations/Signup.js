import axios from 'axios'
import React, { Component } from 'react'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
    }
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
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }

    axios.post('http://localhost:3000/users', { user }, { withCredentials: true })
    .then( response => {
      if (response.data.status === 'created') {
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
        <h1>Sign Up</h1>
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
          <input 
            type="password" 
            name="password_confirmation" 
            value={this.state.password_confirmation}
            onChange={this.handleOnChange}
            placeholder="Confirm Password"
          /><br />
          <button type="submit">
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}


export default Signup;