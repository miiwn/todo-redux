import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from 'src/reducers'

let middlewares = []

if (process.env.NODE_ENV === "development") {
    middlewares.push(createLogger())
}

export default createStore(reducers, applyMiddleware(...middlewares))