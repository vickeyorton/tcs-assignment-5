import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../Reducers';
import rootSaga from '../Saga';
import createSagaMiddleware from '@redux-saga/core';


// Creating Saga Middleware 
const sagaMiddleware = createSagaMiddleware();

// Creating Store
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

// To run Saga
sagaMiddleware.run(rootSaga);

export default store;