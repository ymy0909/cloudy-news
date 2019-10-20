import * as constants from './constants'

const defaultState = {
  login:false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      // return state.login = action.value
      // return Object.assign({}, state, {login:action.value})
      //或者 
      return {...state, ...{login: action.value}}
    default:
      return state
  }
}