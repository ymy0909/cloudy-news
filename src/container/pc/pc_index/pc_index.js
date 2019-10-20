import React, { Component } from 'react'
import { Row,Col,Tabs,TabPane } from 'antd';
import PCIndexSwiper from './pc_index_swiper/pc_index_swiper';
import PCIndexPanel from './pc_index_panel/pc_index_panel';

class PCIndex extends Component {
  state = {  }
  render() {
    return ( 
        <Row>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={18}>
                 <PCIndexSwiper></PCIndexSwiper>
              </Col>
              <Col span={6}>
                 <PCIndexPanel></PCIndexPanel>
              </Col>
            </Row>
            {/* <Tabs defaultActiveKey={selectTab} tabBarExtraContent={extra} onChange={this.changeTab}>
              <TabPane tab="首页" key="index">
          
              </TabPane>
            </Tabs> */}
          </Col>
          <Col span={8}></Col>
        </Row>
     );
  }
}
 
export default PCIndex;