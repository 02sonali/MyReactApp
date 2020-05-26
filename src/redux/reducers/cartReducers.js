import * as types from "../actions/actionTypes";

export default function cartReducer(state =[], action) {
    switch(action.type) {
        case types.ADD_TO_CART:
            return [...state, {...action.product}] //to push a product to state products array, don't use push here as it mutates the original state
        case types.REMOVE_FROM_CART:
            return state; //TODO
        case types.VIEW_CART:
            return [...state]; //TODO
        default:
            return state; // you should always declare default case
    }
}