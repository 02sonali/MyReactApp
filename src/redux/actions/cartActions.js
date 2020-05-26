import * as types from './actionTypes';

export function addToCart(product) {
    return {type: types.ADD_TO_CART, product: product}; //or write product only {type: 'CREATE_PRODUCT', product}
}

export function getCart() {
    return {type: types.VIEW_CART};
}

export function removeFromCart(productId) {
    return {type: types.REMOVE_FROM_CART, id:productId};
}

