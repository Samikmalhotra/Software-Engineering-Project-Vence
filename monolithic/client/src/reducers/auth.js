import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS, 
    REGISTER_FAILURE,
    AUTH_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/types';

const initialState = {
    token: null,
    isAuthenticated: false,
}   

function auth(state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
            return{
                ...state,
                loading: true,
                error: null
            }
        case REGISTER_SUCCESS:
            return{
                ...state, 
                ...payload,
                isRegistered: true,
                loading: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state, 
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default auth;