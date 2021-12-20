import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector,  } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import FormContainer from '../components/FormContainer'
import '../css/auth.css'
import { createShop } from '../actions/shop'

const AddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category,setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [countInStock, setCountInStock] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)
  const { loading, isAuthenticated, token } = auth



  const submitHandler = (e) => {
    // e.preventDefault()
    // dispatch(createShop(token,name,location))
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
        <Form.Group >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group >
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>  
        </Form.Group>

        <Form.Group >
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Description'
            // value={location}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>  
        </Form.Group>

        <Form.Group >
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter location'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>  
        </Form.Group>

        
        <Form.Group >
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></Form.Control>  
        </Form.Group>


        <Form.Group>
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Count in stock'
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>  
        </Form.Group>

        <Button type='submit' variant='primary'>
          Add
        </Button>
      </Form>


    {/* // </FormContainer>
  ) */}
  </>
  )
}

export default AddProduct