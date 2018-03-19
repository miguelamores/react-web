
const initialState = {
    shows: []
}
const shows = (state = initialState, action) => {
    switch (action) {
        // case 'GET_SHOWS':
        //     return {...state}
        case 'GET_SHOW_SUCCESS':
            return {...state, shows: action.payload}
        default:
            return state
    }
}

export default shows