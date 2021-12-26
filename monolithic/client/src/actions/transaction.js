import axios from "axios";
import {
  proxy,
  CART_ADD_ITEM,
    GET_TRANSACTIONS,
    GET_TRANSACTIONS_ERROR,
    GET_TRANSACTION_BY_ID,
    GET_TRANSACTION_BY_ID_ERROR,
    GET_TRANSACTIONS_BY_SHOP_ID,
    GET_TRANSACTIONS_BY_SHOP_ID_ERROR,
    CREATE_TRANSACTION,
    CREATE_TRANSACTION_ERROR,
    CLEAR_CART,
} from "./types";


export const getTransactionById = (token, id) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  try {
    const res = await axios.get(proxy+"/api/transactions/" + id, config);
    dispatch({
      type: GET_TRANSACTION_BY_ID,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_TRANSACTION_BY_ID_ERROR,
      payload: error.response && error.response.data.error
    });
  }
}

export const getTransactions = (token, shopId) => async dispatch => {
    const config = {
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        }
    };
    try {
        const res = await axios.get(proxy+"/api/transactions/shop/" + shopId, config);
        dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data
        });
    } catch (error) {
        dispatch({
        type: GET_TRANSACTIONS_ERROR,
        payload: error.response && error.response.data.error
        });
    }
}

export const getTransactionsByShopId = (token, shopId) => async dispatch => {
    const config = {
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        }
    };
    try {
        const res = await axios.get(proxy+"/api/transactions/shop/" + shopId, config);
        dispatch({
        type: GET_TRANSACTIONS_BY_SHOP_ID,
        payload: res.data
        });
    } catch (error) {
        dispatch({
        type: GET_TRANSACTIONS_BY_SHOP_ID_ERROR,
        payload: error.response && error.response.data.error
        });
    }
}

export const createTransaction = (token, shopId, transactionItems, paymentMethod, itemsPrice, taxPrice, totalPrice) => async dispatch => {
  
  const config = {
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        }
    };
    const body = JSON.stringify({transactionItems, paymentMethod, itemsPrice, taxPrice, totalPrice, shopId});
    console.log(shopId)
    try {
        const res = await axios.post(proxy+"/api/transactions", body, config);
        dispatch({
        type: CREATE_TRANSACTION,
        payload: res.data
        });

        dispatch({
          type: CLEAR_CART
        })
    } catch (e) {
        // dispatch({
        // type: CREATE_TRANSACTION_ERROR,
        // // payload: error.response && error.response.data.error
        // });
    }
}