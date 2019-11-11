import React, { Component } from 'react';
import { Layout } from 'antd';
import { HashRouter, Route, Switch } from 'react-router-dom'
import PCIndex from '../../../container/pc/pc_index/pc_index';
import PCForward from '../../../container/pc/pc_forward/pc_forward';


class PCContent extends Component {
  state = {  }
  
  render() { 
    const { Content } = Layout;
    return ( 
      <Content style={{ padding: '0 50px', marginTop: 80}} className="bg-white">
         <div style={{ minHeight: 380 }} className="qk_pc_container">
            {/* <Switch> */}
              <Route exact path='/' component={PCIndex}></Route>
              <Route path='/forward' component={PCForward}></Route>
            {/* </Switch> */}
         </div>
      </Content>
     );
  }
}
 
export default PCContent;