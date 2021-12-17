export const proxy = "http://localhost:5000";

//  User Actions
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Shop Actions
export const GET_ALL_SHOP = 'GET_ALL_SHOP';
export const GET_ALL_SHOP_ERROR = 'GET_ALL_SHOP_ERROR';
export const CREATE_SHOP = 'CREATE_SHOP';
export const CREATE_SHOP_ERROR = 'CREATE_SHOP_ERROR';
export const DELETE_SHOP = 'DELETE_SHOP';
export const DELETE_SHOP_ERROR = 'DELETE_SHOP_ERROR';
export const UPDATE_SHOP = 'UPDATE_SHOP';
export const UPDATE_SHOP_ERROR = 'UPDATE_SHOP_ERROR';

// Product Actions
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALL_PRODUCTS_ERROR = 'GET_ALL_PRODUCTS_ERROR';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR'; 

// Transaction Actions
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const CREATE_TRANSACTION_ERROR = 'CREATE_TRANSACTION_ERROR';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_TRANSACTIONS_ERROR = 'GET_TRANSACTIONS_ERROR';
export const GET_TRANSACTION_BY_ID = 'GET_TRANSACTION_BY_ID';
export const GET_TRANSACTION_BY_ID_ERROR = 'GET_TRANSACTION_BY_ID_ERROR';
export const GET_TRANSACTIONS_BY_SHOP_ID = 'GET_TRANSACTIONS_BY_SHOP_ID';
export const GET_TRANSACTIONS_BY_SHOP_ID_ERROR = 'GET_TRANSACTIONS_BY_SHOP_ID_ERROR';