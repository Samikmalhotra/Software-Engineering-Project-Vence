import axios from "axios";
import {CART_ADD_ITEM, proxy} from './types'

export const addToCart = (token, id, qty) => async (dispatch, getState) => {
    console.log( 'addToCart: ', token, id, qty );

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
      }
      try {
        const { data } = await axios.get(proxy+`/api/products/${id}`,config)
        console.log(data)
        dispatch({
          type: CART_ADD_ITEM,
          payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
          },
        })

      } catch (error) {
        console.log(error);
      }
    
    
  }
  
  // export const removeFromCart = (id) => (dispatch, getState) => {
  //   dispatch({
  //     type: CART_REMOVE_ITEM,
  //     payload: id,
  //   })
  
  //   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  // }
  