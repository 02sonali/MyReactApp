import {combineReducers} from 'redux';
import products from './productReducers';
import cart from './cartReducers';

const rootReducer = combineReducers({
    products: products,
    cart //short hand notation for same key-value
});

export default rootReducer;