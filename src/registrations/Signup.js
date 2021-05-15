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



  render() {
    return (
      <div>
        <form>
          <input 
          type="text" 
          name="username" 
          value={this.state.username} 
          />
          <input 
          type="text" 
          name="email" 
          value={this.state.email} 
          />
          <input 
          type="password" 
          name="password" 
          value={this.state.password} 
          />
          <input 
          type="password" 
          name="password_confirmation" 
          value={this.state.password_confirmation} 
          />
        </form>
      </div>
    )
  }
}


export default Signup;