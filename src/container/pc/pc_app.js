import React, { Component, Fragment } from 'react'
import { Button } from 'antd';
import PCContent from './pc_content/pc_content';
import PCFooter from '../../component/pc/pc_footer/pc_footer';
import PCHeader from '../../component/pc/pc_header/pc_header';
import './pc_app.less'

class PCApp extends Component {

  constructor(props){
    super(props)
  }

  state = {  }
  render() { 
    return ( 
        <div className="qk_pc_layout">
          <div className="qk_pc_layout_main">
            <PCHeader></PCHeader>
            <PCContent></PCContent>
            <Button></Button>
            <PCFooter></PCFooter>
          </div>
        </div>
    ); 
  }
}
 
export default PCApp;