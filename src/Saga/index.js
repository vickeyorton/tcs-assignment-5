import axios from 'axios';
import {all, delay, put, takeLatest} from 'redux-saga/effects';

const URL = "http://localhost:8900/products";

function *fetchProducts(){
    let products = yield axios.get(URL)
                    .then(res => res.data)
                    yield delay(2000)
                    yield put({
                        type:"GET_PRODUCTS",
                        payload:products
                    })
    
}

export function *getFood(props){
    const output = yield axios.get(`${URL}/${props}`)
    .then(res => res.data)
    // yield delay(2000)
    yield put({
        type:"GET_FOOD",
        payload:output
    })
}

function *renderWatcher(){
    yield takeLatest('GET_LOAD',fetchProducts);
    yield takeLatest('GET_FOOD',getFood);
}

export default function *rootSaga(){
    yield all([
        renderWatcher(),
    ])
}
