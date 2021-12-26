import {
    CREATE_TRANSACTION, GET_TRANSACTIONS, GET_TRANSACTIONS_BY_SHOP_ID
} from '../actions/types';

const initialState = {
    transactions: [],
    transaction: null
}   

function transaction(state = initialState, action){
    const { type, payload } = action;
    
    switch(type){
        case GET_TRANSACTIONS:
            return{
                ...state,
                transactions: payload
            }
        case GET_TRANSACTIONS_BY_SHOP_ID:
            return{
                ...state,
                transactions: payload
            }
        case CREATE_TRANSACTION:
            return{
                ...state,
                transactions: [...state.transactions, payload],
            }
        default:
            return state;
    }
}

export default transaction;