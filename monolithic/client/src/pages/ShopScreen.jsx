import {Button} from 'react-bootstrap';
import React,{useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { getAllProducts } from '../actions/product';
import { getShopById } from '../actions/shop';
import '../css/shopscreen.css'

const ShopScreen = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const shopState = useSelector(state => state.shop)
    const products = useSelector(state => state.products)
    useEffect(() => {
       dispatch(getAllProducts(auth.token,params.shopId)) 
       dispatch(getShopById(auth.token, params.shopId))
    }, [dispatch, auth.token, params.shopId])
    return (
        <div className="shopscreen">
            <h1>{shopState.shop.name}</h1>
            <Button >Add Product</Button>
            <Row>
                <Col xs={8}>
                    <div className="product-div">

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ShopScreen
