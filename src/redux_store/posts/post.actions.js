import Types from './post.actionTypes'

export const setCurrentPost = (idx) => dispatch => {
    return dispatch({type: Types.SET_POST, payload: parseInt(idx)})
}