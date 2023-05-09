import { createStore } from "redux";
import RootRuducer from './reducers/index.js'

const store = createStore(RootRuducer)

export default store
