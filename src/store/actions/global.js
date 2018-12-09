import { createActions } from 'redux-actions'

export const types = {
  LOAD: 'LOAD'
}

export default createActions({
  [types.LOAD]: state => state
})
