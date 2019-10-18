import React from 'react';

import logo from './logo.svg';
import MediaQuery,{useMediaQuery} from 'react-responsive'
import './App.css';
import {
  HashRouter,
  Route
} from 'react-router-dom'
import PCApp from './container/pc/pc_app'
import {Provider} from 'react-redux'
import stroe from './store'


function App() {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })
  // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isTabletOrMobileDevice = useMediaQuery({
  //   query: '(max-device-width: 1224px)'
  // })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div>
      <Provider store={store}>
         Component
         <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
        <HashRouter>
          <Route exact path='/' component={PCApp}></Route>
        </HashRouter>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <HashRouter>
          </HashRouter>
        </MediaQuery>
      </Provider>
    </div>
  );
}

export default App;
