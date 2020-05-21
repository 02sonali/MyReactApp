export default function productReducer(state =[], action) {
    switch(action.type) {
        case "CREATE_PRODUCT":
            /**TODO - you can store the products by id in array instead of direct index 
             * so that you can directly find that product like products[id] instead of using a find operation
             * This is called normalizing
             */
            return [...state, {...action.product}] //to push a product to state array, don't use push here as it mutates the original state
        default:
            return state; // you should always declare default case
    }
}