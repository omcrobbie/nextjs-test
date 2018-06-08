import * as service from '../../services/tv-maze'
import Types from './show.actionTypes'

export const fetchOneShow = (id) => async dispatch => {
    const show = await service.fetchOneShow(id)
    return dispatch({type: Types.FETCHED_SHOW, payload: show})
}
export const fetchAllShows = () => async dispatch => {
    const shows = await service.fetchAllShows()
    return dispatch({type: Types.FETCHED_SHOWS, payload: shows})
}