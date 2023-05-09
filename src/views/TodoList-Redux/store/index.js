import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import RootRuducer from './reducers/index.js'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(RootRuducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export default store
