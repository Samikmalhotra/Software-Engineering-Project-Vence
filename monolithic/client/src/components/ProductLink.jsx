import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Card, Form } from 'react-bootstrap'
import '../css/product.css'
import { Button } from '@mui/material'
import { addToCart } from '../actions/cart'
import { useSelector, useDispatch } from 'react-redux'

const Product = ({ product }, token) => {
  const [qty, setQty] = useState(0)

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const submitHandler = async(e) => {
    e.preventDefault()
    console.log('submitted')
    await dispatch(addToCart(auth.token, product._id, qty))
    setQty(0)
  }

  return (
    <Card className='my-3 p-3 rounded product-card product-card-link'>
      {/* <Link to={`/product/${product._id}`}> */}
        <Card.Img src={product.image} variant='top'className='card-img' />
      {/* </Link> */}

      <Card.Body>
        {/* <Link to={`/product/${product._id}`}> */}
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as='h6'>{product.brand}</Card.Text>

        {/* </Link> */}

        <Card.Text as='h3'>${product.price}</Card.Text>
        <Card.Text as='h5'>In Stock: {product.countInStock}</Card.Text>


      </Card.Body>
      <Form onSubmit={submitHandler}>
          <input
            type='number'
            placeholder='Enter quantity'
            value={qty} className="input-qty"
            onChange={(e) => setQty(e.target.value)}
          ></input>
          <Button type="submit">Add</Button>
      </Form>
    </Card>
  )
}

export default Product