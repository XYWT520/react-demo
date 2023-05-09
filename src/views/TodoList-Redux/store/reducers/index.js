import Filter from './filtre'
import Todos from './todos'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  Filter,
  Todos
})

export default rootReducer