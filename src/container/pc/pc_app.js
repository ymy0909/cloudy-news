import React, { Component, Fragment } from 'react'
import { Button, Layout } from 'antd';
import PCFooter from '../../component/pc/pc_footer/pc_footer';
import PCHeader from '../../component/pc/pc_header/pc_header';
import './pc_app.less'
import PCContent from '../../component/pc/pc_content/pc_content';

class PCApp extends Component {

  constructor(props){
    super(props)
  }

  state = {  }
  render() { 
    return ( 
        <div className="qk_pc_layout">
          <div className="qk_pc_layout_main">
            <Layout className="bg-white">
              <PCHeader></PCHeader>
              <PCContent></PCContent>
              <Button></Button>
              <PCFooter></PCFooter>
            </Layout>
          </div>
        </div>
    ); 
  }
}
 
export default PCApp;