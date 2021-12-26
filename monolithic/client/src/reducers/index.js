import { combineReducers } from 'redux';
import auth from './auth';
import shop from './shop';
import product from './product';
import cart from './cart'
export default combineReducers({
    auth,
    shop,
    product,
    cart,
})