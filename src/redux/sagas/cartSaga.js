import { takeEvery, put } from 'redux-saga/effects';
import * as cartActions from '../actions/cartActions';
import * as types  from '../actions/actionTypes';
import {takeLatest} from 'redux-saga/effects';

function* fetchCart() {
  try {
    // const response = yield call(fetch, 'https://api.service.com/endpoint'); // your api endpoint here
    // const responseBody = response.json();
    
    // yield put(cartActions.getCart({}));
    cartActions.getCart({});
  } catch (e) {
    console.log(e);
    return;
  }
};

export function* getCart() {
  yield takeLatest(types.VIEW_CART, fetchCart);
}