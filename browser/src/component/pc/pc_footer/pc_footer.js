import React, { Component } from 'react';
import { Col,Row,Layout } from 'antd';

class PCFooter extends Component {

  constructor(props){
      super(props)
  }

  state = {  }
  render() { 
    const {Footer} = Layout;
    return ( 
      <Footer>
        <Row>
          <Col span={2}></Col>
            <Col span={20} style={{textAlign:'center'}}>
              Copyright2019新闻头条&nbsp;沪ICP备10010000号
            </Col> 
          <Col span={2}></Col>
        </Row> 
      </Footer>
    );
  }
}
 
export default PCFooter;