import React, { Component, Fragment } from 'react'
import { Button } from 'antd';
import PCFooter from '../../component/pc/pc_footer';


class PCApp extends Component {

  constructor(props){
    super(props)
  }

  state = {  }
  render() { 
    return ( 
        <Fragment>
          {this.props.children}
          <Button>123</Button>
          <PCFooter></PCFooter>
        </Fragment>
    ); 
  }
}
 
export default PCApp;