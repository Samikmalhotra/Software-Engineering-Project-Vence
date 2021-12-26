import {Button} from 'react-bootstrap';
import React,{useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { getAllProducts } from '../actions/product';
import { getShopById } from '../actions/shop';
import '../css/shopscreen.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddProduct from '../components/AddProduct';
import { Link } from 'react-router-dom';
import Product from '../components/Product';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ShopScreen = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const params = useParams();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const shopState = useSelector(state => state.shop)
    const productState = useSelector(state => state.product)

    useEffect(() => {
       dispatch(getAllProducts(auth.token,params.shopId)) 
       dispatch(getShopById(auth.token, params.shopId))
    }, [dispatch, auth.token, params.shopId])
    return (
        <div className="shopscreen">
            <Link to="/newtransaction"><Button >New Transaction</Button></Link>
            <Button onClick={handleOpen}>Add Product</Button>
            <h1>{shopState && shopState.shop && shopState.shop.name}</h1>
                  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <AddProduct params={params}/>
        </Box>
      </Modal>
            <Row>
                <Col xs={8}>
                    <div className="product-div">
                      {productState && productState.products && productState.products.map(prod => {
                        return(
                          <Product product={prod}/>
                        )
                      })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ShopScreen
