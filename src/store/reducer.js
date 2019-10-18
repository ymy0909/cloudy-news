import * as constants from './constants'
import { access } from 'fs'

const defaultState = {
  login:false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return state.login = action.value
    default:
      return state
  }
}