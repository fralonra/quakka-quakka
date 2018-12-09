import { handleActions } from 'redux-actions'
import actions from '../actions'

const initialState = {
  data: [],
  index: null
}

const reducers = handleActions({
  [actions.setData] (state, action) {
    return {
      ...state,
      data: action.payload
    }
  },
  [actions.setIndex] (state, action) {
    return {
      ...state,
      index: action.payload
    }
  }
}, initialState)

export default reducers
