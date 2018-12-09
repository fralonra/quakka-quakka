import { createActions } from 'redux-actions'

export const types = {
  SET_DATA: 'SET_DATA',
  SET_INDEX: 'SET_INDEX',
  ADD_ENTRY: 'ADD_ENTRY',
  DEL_ENTRY: 'DEL_ENTRY'
}

export default createActions({
  [types.SET_DATA]: data => data,
  [types.SET_INDEX]: index => index,
  [types.ADD_ENTRY]: entry => entry,
  [types.DEL_ENTRY]: entry => entry
})
