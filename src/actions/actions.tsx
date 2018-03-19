export const getShows = () => {
    return {
        type: 'GET_SHOWS'
    }   
}

export const getShowsSuccess = (shows) => {
    return {
        type: 'GET_SHOWS_SUCCESS',
        payload: new Promise((res) => {res(shows)})
    }   
}
