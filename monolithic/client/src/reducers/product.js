import { CREATE_PRODUCT, CREATE_PRODUCT_ERROR, DELETE_PRODUCT, DELETE_PRODUCT_ERROR, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_ERROR, GET_PRODUCT, GET_PRODUCT_ERROR, UPDATE_PRODUCT, UPDATE_PRODUCT_ERROR } from '../actions/types'

const initialState = {
    products: [],
    product: null
}   

function product(state=initialState, action){
    const { type, payload } = action;

    switch(type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: payload
            }
        case GET_ALL_PRODUCTS_ERROR:
        case CREATE_PRODUCT:
        case CREATE_PRODUCT_ERROR:
        case DELETE_PRODUCT:
        case DELETE_PRODUCT_ERROR:
        case UPDATE_PRODUCT:
        case UPDATE_PRODUCT_ERROR:
        case GET_PRODUCT:
        case GET_PRODUCT_ERROR:
        default: 
            return state
    }
}

export default product;