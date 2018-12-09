import { handleActions } from 'redux-actions'
import actions from '../actions'

const initialState = {
  isLoading: true
}

const reducers = handleActions({
  [actions.load] (state, action) {
    return {
      ...state,
      isLoading: action.payload
    }
  }
}, initialState)

export default reducers
