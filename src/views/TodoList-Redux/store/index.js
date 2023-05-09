import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import RootRuducer from './reducers/index.js'

const store = createStore(RootRuducer, applyMiddleware(thunk))

export default store
