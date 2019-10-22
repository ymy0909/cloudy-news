import * as constants from './constants'

const defaultState = {
    swiperParams:null,
    forwardList:[]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.get_forward_list:
      console.log(action)
      return {...state, ...{swiperParams: action.swiperParams,forwardList:action.forwardList}}
    default:
      return state
  }
}
