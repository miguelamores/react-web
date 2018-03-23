export const GET_SHOWS = 'GET_SHOWS'
export const GET_SHOWS_SUCCESS = 'GET_SHOWS_SUCCESS'

export const getShows = () => {
    return {
        type: GET_SHOWS
    }   
}

export const getShowsSuccess = (shows) => {
    return {
        type: GET_SHOWS_SUCCESS,
        payload: shows//rnew Promise((res) => {res(shows)})
    }   
}
