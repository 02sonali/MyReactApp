import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //a middleware that warns us if we accidently mutate redux state

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, 
        initialState, 
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}