// import axios from 'axios';
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSignup, handleLoginFormChange, createUserSignup, userLogin } from '../redux/actions/userActions';


const Login = (props) => {

  
  const { signup, form, toggleSignup, handleLoginFormChange, createUserSignup, userLogin } = props
  const { username, password, passwordConfirmation } = form

  const handleSubmit = (event) => {
    event.preventDefault()
    if (signup) {
      if (password === passwordConfirmation){
        createUserSignup({ username: username, password: password })
      } else {
        alert("Oh no, your passwords don't match, please try again.")
      }
    } else {
      userLogin({ username: username, password: password })
    }
  }


  return(
    <div>
      <h2>{ signup ? 'Sign up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={handleLoginFormChange} />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handleLoginFormChange}/>
        </label>
        <br/>
        { signup && 
          <label>
            Confirm Password:
            <input type="text" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginFormChange} />
          </label>
        }
        <input type="submit" value="Submit" />
      </form>
      <br/>
      <br/>
      <button onClick={toggleSignup}> Or you can {signup ? 'Login here' : 'Sign up here'} </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  signup: state.user.signup,
  form: state.user.loginForm
})

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, createUserSignup, userLogin })(Login);


// class Login extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       id: '',
//       username: '',
//       email: '',
//       password: '',
//       errors: ''
//     }
//   }

//   componentDidMount() {
//       return this.props.loggedInStatus ? this.redirect() : null
//   }

//   handleOnChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleOnSubmit = (event) => {
//     event.preventDefault()
//     let user = {
//       username: this.state.username,
//       email: this.state.email,
//       password: this.state.password
//     }

//     axios.post('http://localhost:3000/login', { user }, { withCredentials: true })
//     .then( response => {
//       if (response.data.logged_in) {
// // console.log(user)
// // console.log(response.data.user.id)
//         this.props.handleLogin(response.data)
//         this.redirect()
//       } else {
//         this.setState({
//           errors: response.data.errors
//         })
//       }
//     })
//     .catch( error => console.log('ERROR: ', error) )
//   }


//   redirect = () => {
//     this.props.history.push('/')
//   }
  

//   render() {
//     return (
//       <div>
//         <h1>Log In</h1>
//         <form onSubmit={this.handleOnSubmit}>
//           <input 
//             type="text" 
//             name="username" 
//             value={this.state.username}
//             onChange={this.handleOnChange}
//             placeholder="Username"
//           /> <br />
//           <input 
//             type="text" 
//             name="email" 
//             value={this.state.email} 
//             onChange={this.handleOnChange}
//             placeholder="Email"
//           /><br />
//           <input 
//             type="password" 
//             name="password" 
//             value={this.state.password}
//             onChange={this.handleOnChange}
//             placeholder="Password"
//           /><br />
//           <input type="submit" value="Login"/>
//           <br></br>
//           <div><Link to='/signup'>Sign Up</Link></div>
//         </form>
//       </div>
//     )
//   }
// }
// export default Login;