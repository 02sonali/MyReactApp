import * as types from './actionTypes';

export function createProduct(product) {
    return {type: types.CREATE_PRODUCT, product: product}; //or write product only {type: 'CREATE_PRODUCT', product}
}

export function getProducts() {
    return {type: types.GET_PRODUCTS};
}

export function setProducts(products) {
    return {type: types.SET_PRODUCTS,products: products};
}

export function editProduct(id) {
    return {type: types.EDIT_PRODUCT, id:id};
}

export function deleteProduct(id) {
    return {type: types.DELETE_PRODUCT, id:id};
}

