import React, { Component } from 'react';
import { Col,Row } from 'antd';

class PCFooter extends Component {

  constructor(props){
      super(props)
  }

  state = {  }
  render() { 
    return ( 
      <footer>
        <Row>
          <Col span={2}></Col>
            <Col span={20} style={{textAlign:'center'}}>
              Copyright2019新闻头条&nbsp;沪ICP备10010000号
            </Col> 
          <Col span={2}></Col>
        </Row> 
      </footer>
    );
  }
}
 
export default PCFooter;