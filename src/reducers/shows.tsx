import { GET_SHOWS_SUCCESS } from '../actions/actions'


const initialState = {
    shows: []
}
const shows = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOWS_SUCCESS:
            return {...state, shows: action.payload}
        default:
            return state
    }
}

export default shows