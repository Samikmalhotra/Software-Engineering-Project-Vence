import { CART_ADD_ITEM } from "../actions/types";

const initialState = {
    loading: false,
    cart: []
}

function cart(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case CART_ADD_ITEM:
        const item = payload
        console.log(item)

        const existItem = state.cart.find((x) => x.product === item.product)

        if (existItem) {
            return {
            ...state,
            cart: state.cart.map((x) =>
                x.product === existItem.product ? item : x
            ),
            }
        } else {
            return {
            ...state,
            cart: [...state.cart, item],
            }
        }
        default:
            return state
    }
}
export default cart