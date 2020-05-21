export function createProduct(product) {
    return {type: 'CREATE_PRODUCT', product: product}; //or write product only {type: 'CREATE_PRODUCT', product}
}