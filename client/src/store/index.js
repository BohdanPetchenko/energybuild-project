
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promiseReducer from '../reducers/promise-reducer'

const store = createStore(promiseReducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))

export default store