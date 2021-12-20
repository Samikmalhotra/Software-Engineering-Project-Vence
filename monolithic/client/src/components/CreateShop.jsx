import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector,  } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import FormContainer from '../components/FormContainer'
import '../css/auth.css'
import { createShop } from '../actions/shop'

const CreateShop = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)
  const { loading, isAuthenticated, token } = auth

//   const redirect = location.search ? location.search.split('=')[1] : '/'


  const submitHandler = async(e) => {
    e.preventDefault()
    await dispatch(createShop(token,name,location))
  }

  return (
    // <FormContainer>
    <>
      <h1>Create Shop</h1>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Create
        </Button>
      </Form>


    {/* // </FormContainer>
  ) */}
  </>
  )
}

export default CreateShop