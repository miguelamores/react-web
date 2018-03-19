import { createEpicMiddleware } from "redux-observable"
import { fetchShowsEpic } from '../epics/epics'
import { applyMiddleware, createStore } from "redux"
import reducer from '../reducers/shows'
import { createLogger } from 'redux-logger'

export const initStore = (initialState) => {
    const epicMiddleware = createEpicMiddleware(fetchShowsEpic)
    const logger = createLogger({ collapsed: true })
    const reduxMiddleware = applyMiddleware(epicMiddleware, logger)

    return createStore(reducer, initialState, reduxMiddleware)
}