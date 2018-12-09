import { combineReducers } from 'redux'

import global from './global'
import quakka from './quakka'

const reducers = combineReducers({
  global,
  quakka
})

export default reducers
