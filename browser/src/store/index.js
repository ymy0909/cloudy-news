import reducer from './reducer'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';
// import * as actionCreators from './actionCreators'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
  
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(
  reducer,
  enhancer
)

export default store