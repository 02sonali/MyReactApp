import {combineReducers} from 'redux';
import products from './productReducers';

const rootReducer = combineReducers({
    products: products
});

export default rootReducer;