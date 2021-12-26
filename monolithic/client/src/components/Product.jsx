import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../css/product.css'
import { deleteProduct } from '../actions/product'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
const Product = ({ product }) => {

  const auth = useSelector(state => state.auth)
  return (
    <Card className='my-3 p-3 rounded product-card'>
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
        <Button onClick={deleteProduct(auth.token, product._id)}>Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default Product