import axios from 'axios';
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOAD_REQUEST,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,    
    LOGOUT,
    proxy
} from './types';



// Register User    

export const register = (
    name,email,password
) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json',
            // 'Authorization': `${token}`
        }
    }
    const body = JSON.stringify({name,email,password})

    try {
        dispatch({
            type: REGISTER_REQUEST
        })
        const res = await axios.post(proxy+'/api/users', body, config);
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response && error.response.data.message
        })
    }
}


// Login User    

export const login = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-type':'application/json',
        }
    }

    const body = JSON.stringify({email, password});

    try {
        dispatch({
            type: LOGIN_REQUEST
        })

        const res = await axios.post(proxy+'/api/users/login', body, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (error) {

        dispatch({
            type: AUTH_ERROR,
            payload: error.response && error.response.data.message

        })
    }
}

// Logout User
export const logout = () => async dispatch => {
    dispatch({ type: LOGOUT});
}
