import axios from 'axios';
import {

} from './types';

export const getAllProducts = (token, shopId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.get('/api/products'+shopId);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCTS_ERROR,
            payload: error.response && error.response.data.error
        });
    }
}

export const getProduct = (token, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.get('/api/products'+id);
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_ERROR,
            payload: error.response && error.response.data.error
        });
    }
}

export const createProduct = (token, shopId, name, price, description, category, brand, image, countInStock) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const body = JSON.stringify({shopId, name, price, description, category, brand, image, countInStock});
    try {
        const res = await axios.post('/api/products', body, config);
        dispatch({
            type: CREATE_PRODUCT,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_ERROR,
            payload: error.response && error.response.data.error
        });
    }
}

export const updateProduct = (token, id, name, price, description, category, brand, image, countInStock) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const body = JSON.stringify({name, price, description, category, brand, image, countInStock});
    try {
        const res = await axios.put('/api/products'+id, body, config);
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_ERROR,
            payload: error.response && error.response.data.error
        });
    }
}

export const deleteProduct = (token, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.delete('/api/products'+id, config);
        dispatch({
            type: DELETE_PRODUCT,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_ERROR,
            payload: error.response && error.response.data.error
        });
    }
}