import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as Posts from './posts'
import * as Shows from './shows'

const initialState = {
    post: Posts.initialState, 
    show: Shows.initalState
}
const reducer = combineReducers({
    post: Posts.reducer,
    show: Shows.reducer
})
export function initializeStore(state = initialState) {
    return createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}