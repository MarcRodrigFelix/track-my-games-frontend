import { connect } from 'react-redux';
import { toggleSignup, handleLoginFormChange, createUserSignup, userLogin } from '../redux/actions/userActions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



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
      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={username} onChange={handleLoginFormChange} />
          <Form.Text className="text-muted">
           Enter your unique username to continue.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={password} onChange={handleLoginFormChange}/>
        </Form.Group>

        { signup && 
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="passwordConfirmation" value={passwordConfirmation} onChange={handleLoginFormChange} />
        </Form.Group>
        }
          <Button type="submit" value="Submit">Submit</Button>
      </Form>

      <Button onClick={toggleSignup}> {signup ? 'Login here' : 'Sign up here'} </Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  signup: state.user.signup,
  form: state.user.loginForm
})

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, createUserSignup, userLogin })(Login);