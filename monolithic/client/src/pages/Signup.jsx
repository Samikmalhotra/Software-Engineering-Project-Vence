import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector,  } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import FormContainer from '../components/FormContainer'
import { register } from '../actions/auth'
import '../css/auth.css'

const SignupScreen = () => {
  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)
  const { loading, isAuthenticated, token } = auth

//   const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/shops')
    }
   
  }, [])
    if (isAuthenticated) {
      navigate('/shops')
    }


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(name,email, password))
  }

  return (
    // <FormContainer>
    <>
    <div class="form-structor">
      <div class="signup">
      <h2 class="form-title" id="signup">Sign Up</h2>
      {/* {error && <Message variant='danger'>{error}</Message>} */}
      {/* {loading && <Loader />} */}
      <Form 
      onSubmit={submitHandler}
    >
      <div class="form-holder">
      <Form.Group >
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            type='text'
            placeholder='Enter name'
            value={name} className="input"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          {/* <Form.Label>Email Address</Form.Label> */}
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email} className="input"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group >
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password} className="input"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </div>
        <Button type='submit' className="submit-btn">
          Sign Up
        </Button>
      </Form>
      </div>
      <div class="login slide-up">
		<div class="center">
			<Link to = "/login" ><h2 class="form-title" id="login"><span>Already signed up?</span>Login</h2></Link>
		</div>
	</div>
    </div>
      

      {/* <Row className='py-3'>
        <Col>
          Already signed up?{' '}
          <Link to={"/login"}>
            Signin
          </Link>
        </Col>
      </Row> */}
    {/* // </FormContainer>
  ) */}
  </>
  )
}

export default SignupScreen