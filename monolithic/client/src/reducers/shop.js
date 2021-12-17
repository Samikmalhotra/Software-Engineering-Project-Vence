import {
    GET_ALL_SHOP, GET_SHOP_BY_ID, CREATE_SHOP, UPDATE_SHOP, DELETE_SHOP, GET_ALL_SHOP_ERROR, GET_SHOP_BY_ID_ERROR, CREATE_SHOP_ERROR, UPDATE_SHOP_ERROR, DELETE_SHOP_ERROR
} from '../actions/types';

const initialState = {
    key: null,
    isAuthenticated: null,
    teamLeader: null
}   

function auth(state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case GET_ALL_SHOP:
            return{
                ...state,
                shops: payload
            }
        case GET_SHOP_BY_ID:
            return{
                ...state,
                shop: payload
            }
        case CREATE_SHOP:
            return{
                ...state,
                shops
            }
        case UPDATE_SHOP:
            return{
                ...state,
                shop: payload
            }
        case CREATE_SHOP_ERROR:
        case UPDATE_SHOP_ERROR:
        case DELETE_SHOP:
        case DELETE_SHOP:
        case GET_ALL_SHOP_ERROR:
        case GET_SHOP_BY_ID_ERROR:
        case DELETE_SHOP_ERROR:
            return{
                ...state
            }
        
        default:
            return state;
    }
}

export default auth;