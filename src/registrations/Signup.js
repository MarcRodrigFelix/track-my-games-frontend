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
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form>
          <input 
          type="text" 
          name="username" 
          value={this.state.username}
          onChange={this.handleOnChange}
          />
          <input 
          type="text" 
          name="email" 
          value={this.state.email} 
          onChange={this.handleOnChange}
          />
          <input 
          type="password" 
          name="password" 
          value={this.state.password}
          onChange={this.handleOnChange}
          />
          <input 
          type="password" 
          name="password_confirmation" 
          value={this.state.password_confirmation}
          onChange={this.handleOnChange}
          />
        </form>
      </div>
    )
  }
}


export default Signup;