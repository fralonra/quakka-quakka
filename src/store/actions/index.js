import global, { types as globalTypes } from './global'
import quakka, { types as quakkaTypes } from './quakka'

export const actionTypes = {
  ...globalTypes,
  ...quakkaTypes
}

const actions = {
  ...global,
  ...quakka
}

export default actions
