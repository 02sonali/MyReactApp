import * as types from "../actions/actionTypes";

export default function productReducer(state =[], action) {
    switch(action.type) {
        case types.CREATE_PRODUCT:
            /**TODO - you can store the products by id in array instead of direct index 
             * so that you can directly find that product like products[id] instead of using a find operation
             * This is called normalizing
             */
            return [...state, {...action.product}] //to push a product to state products array, don't use push here as it mutates the original state
        case types.EDIT_PRODUCT:
            return state; //TODO
        case types.DELETE_PRODUCT:
            return state; //TODO
        case types.GET_PRODUCTS:
            return [...state];
        case types.SET_PRODUCTS:
            return [...state, ...action.products]; //TODO
        case types.SEARCH_PRODUCT:
            return {products: [...state], searchText: action.text}
        default:
            return state; // you should always declare default case
    }
}