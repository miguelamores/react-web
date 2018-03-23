import { createEpicMiddleware } from "redux-observable"
import thunkMiddleware from 'redux-thunk'
import { fetchShowsEpic } from '../epics/epics'
import { applyMiddleware, createStore } from "redux"
import shows from '../reducers/shows'
import { createLogger } from 'redux-logger'

const initStore = (initialState) => {
    const epicMiddleware = createEpicMiddleware(fetchShowsEpic)
    const logger = createLogger({ collapsed: true })
    const reduxMiddleware = applyMiddleware(thunkMiddleware, epicMiddleware, logger)

    return createStore(shows, initialState, reduxMiddleware)
}

export default initStore