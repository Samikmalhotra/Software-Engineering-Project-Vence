import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../css/auth.css'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import FormContainer from '../components/FormContainer'
// import { login } from '../actions/auth'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

//   const userLogin = useSelector((state) => state.userLogin)
//   const { loading, error, userInfo } = userLogin

//   const redirect = location.search ? location.search.split('=')[1] : '/'

//   useEffect(() => {
//     if (userInfo) {
//       history.push(redirect)
//     }
//   }, [history, userInfo, redirect])

//   const submitHandler = (e) => {
//     e.preventDefault()
//     dispatch(login(email, password))
//   }

  return (
    // <FormContainer>
    <>
    <div class="form-structor">
	<div class="signup">
  <h2 class="form-title" id="signup">Sign In</h2>
      {/* {error && <Message variant='danger'>{error}</Message>} */}
      {/* {loading && <Loader />} */}
      <Form 
    //   onSubmit={submitHandler}
    >
      <div class="form-holder">
        <Form.Group controlId='email'>
          {/* <Form.Label >Email Address</Form.Label> */}
          <Form.Control 
            type='email'
            placeholder='Enter email'
            value={email} className="input"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
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
          Sign In
        </Button>
        
      </Form>
      </div>
      <div class="login slide-up">
		<div class="center">
			<h2 class="form-title" id="login"><span>or</span>Sign Up</h2>
		</div>
	</div>
      {/* <Row className='py-3'>
        <Col>
          New Customer?{' '} */}
          {/* <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> */}
            {/* Register
          </Link> */}
        {/* </Col>
      </Row> */}
     
      </div>
    {/* // </FormContainer>
  ) */}
  </>
  )
}

export default LoginScreen