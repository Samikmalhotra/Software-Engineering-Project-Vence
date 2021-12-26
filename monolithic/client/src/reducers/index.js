import { combineReducers } from 'redux';
import auth from './auth';
import shop from './shop';
import product from './product';
import cart from './cart'
import employee from './employee';
export default combineReducers({
    auth,
    shop,
    product,
    cart,
    employee    
})