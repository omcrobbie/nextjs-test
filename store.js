import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import fetch from 'isomorphic-unfetch'

const initialState = {
    posts: [
        {
            id:'hello-nextjs',
            t:'Hello Next.js',
            c:'Content for Hello Next.js'
        },
        {
            id:'nextjs-awesome',
            t:'Learn Next.js is awesome',
            c:'Next.js is awesome!'
        }, 
        {
            id:'deploy-apps',
            t:'Deploy apps with Zeit',
            c:'We\'re not going to do that...'
        }
    ],
    shows: [],
    currentShow: {}
}
const actionTypes = {
    FETCHED_SHOWS: 'fetch_shows',
    FETCHED_SHOW: 'fetch_SHOW'
}
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCHED_SHOWS:
            return Object.assign({}, state, {
                shows: action.payload
            })
        case actionTypes.FETCHED_SHOW:
            return Object.assign({}, state, {
                currentShow: action.payload
            })
        default:
            return state;
    }
}
export const fetchAllShows = async dispatch => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(`Show data fetched. Count: ${data.length} `)
    return dispatch({type: actionTypes.FETCHED_SHOWS, payload: data});
}
export const fetchOneShow = (id) => async dispatch => {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()
    console.log(`Fetched: ${show.name}`)
    return dispatch({type: actionTypes.FETCHED_SHOW, payload: show})
}
export function initializeStore(state = initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}