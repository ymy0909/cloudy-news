import {combineReducers} from "redux";
import {reducer as app} from './app'
import {reducer as home} from './home'

const reducer = combineReducers({
  app,
  home
})
export default reducer;