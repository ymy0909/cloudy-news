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
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
         <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
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