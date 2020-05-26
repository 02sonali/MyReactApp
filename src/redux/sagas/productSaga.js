import { takeLatest, put, call } from 'redux-saga/effects';
import * as productActions from '../actions/productActions';
import * as types  from '../actions/actionTypes';
import Products from "../../mock-api/ProductList.json";

export default function* getProducts() {
  yield takeLatest(types.GET_PRODUCTS, function* fetchRecords() {
    try {
        // const response = yield call(fetch, 'https://api.service.com/endpoint'); // your api endpoint here
        // const responseBody = response.json();
        const responseBody = Products;
        yield put(productActions.setProducts(responseBody));
    } catch (e) {
        // yield put(productActions.fetchFailed(e));
        console.log(e);
        return;
    }
  });
}