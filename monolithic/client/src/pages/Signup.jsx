import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector,  } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import FormContainer from '../components/FormContainer'
import { login } from '../actions/auth'
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
  }, [navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    // <FormContainer>
    <>
      <h1>Sign Up</h1>
      {/* {error && <Message variant='danger'>{error}</Message>} */}
      {/* {loading && <Loader />} */}
      <Form 
      onSubmit={submitHandler}
    >
        <Form.Group controlId='email'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            value={email}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign Up
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Already signed up?{' '}
          <Link to={"/login"}>
            Signin
          </Link>
        </Col>
      </Row>
    {/* // </FormContainer>
  ) */}
  </>
  )
}

export default SignupScreen