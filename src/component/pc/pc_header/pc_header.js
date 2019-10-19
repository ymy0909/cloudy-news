import React, { Component } from 'react';
import { Layout,Menu,Tabs  } from 'antd';
import './pc_header.less'
import { connect } from 'react-redux'
import { login} from '../../../store/actionCreators'

class PCHeader extends Component {

  constructor(props){
     super(props)
     this.state = {
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
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    const { TabPane } = Tabs;
    const { submit,login } = this.props
    return ( 
      // <header>
      //   <Row>
      //     <Col span={2}></Col>
      //     <Col span={4}>
      //       <a className="logo" href="/">
      //         <img src="{logo}" alt=""/>
      //         <span>新闻头条</span>
      //       </a>
      //     </Col>
      //     <Col span={18}>
      //       <div>
      //           {this.getLoginState(login)}  
      //       </div>
      //       1122333
      //       <Button onClick={e=>submit()}>登录</Button>
      //     </Col>
      //   </Row>
      // </header>
      <Layout>
        <Header className="qk_pc_header">
          <div className="qk_pc_header_main">
            <div className="qk_pc_header_content">
              <Tabs defaultActiveKey="1">
                <TabPane tab="首页" key="1">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="前沿快讯" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="热点资讯" key="3">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="区块链" key="4">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="应用落地" key="5">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="政策法规" key="6">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="行业大佬" key="7">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="技术了解" key="8">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
              {/* <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  Hover me <Icon type="down" />
                </a>
               </Dropdown> */}
            </div>
          </div>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
     );
  }
  getLoginState(login){
      if(login){
        return(
          <div>已登录</div>
        )
      }else{
        return(
          <div>未登录</div>
        )
      }    
  }   
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: () => {
      const actionCreator = login(true)
      dispatch(actionCreator)
    }
  }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(PCHeader);