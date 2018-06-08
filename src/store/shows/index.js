import Types from './show.actionTypes'
export const initalState = {
    shows:[],
    currentShow: {}
}
export const reducer = (state = initalState, action) => {
    switch(action.type) {
        case Types.FETCHED_SHOW:
            return Object.assign({}, state, {
                currentShow: action.payload
            })
        case Types.FETCHED_SHOWS:
            return Object.assign({}, state, {
                shows: action.payload
            })
        default:
            return state
    }
}