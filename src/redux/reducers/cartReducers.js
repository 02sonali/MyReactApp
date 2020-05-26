import * as types from "../actions/actionTypes";

export default function cartReducer(state =[], action) {
    switch(action.type) {
        case types.ADD_TO_CART:
            /**TODO - you can store the products by id in array instead of direct index 
             * so that you can directly find that product like products[id] instead of using a find operation
             * This is called normalizing
             */
            return [...state, {...action.product}] //to push a product to state products array, don't use push here as it mutates the original state
        case types.REMOVE_FROM_CART:
            return state; //TODO
        case types.VIEW_CART:
            return state; //TODO
        default:
            return state; // you should always declare default case
    }
}