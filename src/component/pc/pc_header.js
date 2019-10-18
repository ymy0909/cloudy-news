import React, { Component } from 'react';
import { Col,Row } from 'antd';
import './pc_footer.scss'

class PCHeader extends Component {

  constructor(props){
     super(props)
     this.state = {
       hasLogined:false,//是否登录
       userName:'',
       userId:'',
       current:'top',//当前点击的导航
       modalVisible:false//表示登录注册的模态框
     } 
  }

  componentWillMount(){
    if(localStorage.userId && localStorage.userId != ''){
      
    }
  }

  state = {  }
  render() { 
    return ( 
      <Header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a className="logo" href="/">
              <img src="{logo}" alt=""/>
              <span>新闻头条</span>
            </a>
          </Col>
          <Col span={18}>
            
          </Col>
        </Row>
      </Header>
     );
  }
}
 
export default PCHeader;