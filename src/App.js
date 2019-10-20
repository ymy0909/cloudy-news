import React from 'react';

// import logo from './logo.svg';
import MediaQuery,{useMediaQuery} from 'react-responsive'
import './App.less';
import {
  HashRouter,
  Route,
} from 'react-router-dom'
import PCApp from './container/pc/pc_app'
import {Provider} from 'react-redux'
import store from './store'
// import { hot } from 'react-hot-loader/root'
import MobileApp from './container/mobile/mobile_app';
// import { Switch } from 'antd';
// import PCIndex from './container/pc/pc_index/pc_index';
// import PCForward from './container/pc/pc_forward/pc_forward';


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
      {/* device={{ deviceWidth: 1600 }} */}
      <Provider store={store}>
         <MediaQuery minDeviceWidth={768} >
           <HashRouter>
              <PCApp>
              </PCApp>
           </HashRouter>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>
          <HashRouter>
            <Route exact path='/' component={MobileApp}></Route>
          </HashRouter>
        </MediaQuery>
      </Provider>
    </div>
  );
}

// export default process.env.NODE_ENV === "development" ? hot(App) : App;
export default App;