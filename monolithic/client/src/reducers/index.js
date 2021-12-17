import { combineReducers } from 'redux';
import auth from './auth';
import shop from './shop';
import product from './product';

export default combineReducers({
    auth,
    shop,
    product
})