import React, { Component } from 'react';
import { Layout,Menu,Tabs,Dropdown,Icon  } from 'antd';
import '../../../styles/alain.less'
import './pc_header.less'
import { connect } from 'react-redux'
import { login} from '../../../store/app/actionCreators'
import { withRouter,Route,Switch } from 'react-router-dom'


class PCHeader extends Component {

  constructor(props){
     super(props)
     this.state = {
       userName:'',
       userId:'',
       current:'top',//当前点击的导航
       modalVisible:false,//表示登录注册的模态框
       selectTab:'index'
     }
  }

  componentWillMount(){
    // if(localStorage.userId && localStorage.userId != ''){

    // }
    const { location } = this.props
    let pathname = location.pathname
    this.setState({
      selectTab:pathname.substr(1)?pathname.substr(1):'index'
    })
  }

    changeTab = activeKey => {
    // this.setState({ activeKey });
    console.log(activeKey)
    console.log(this.props.history)
    const pathname = activeKey === 'index'?'/':`/${activeKey}`
    this.props.history.push({pathname: pathname})
  };

  render() {
    const { Header } = Layout;
    const { TabPane } = Tabs;
    const { submit,login } = this.props

    const menu = (
      <Menu>
        <Menu.Item>
          <span>虚拟币</span>
        </Menu.Item>
        <Menu.Item>
          <span>比特币</span>
        </Menu.Item>
        <Menu.Item>
          <span>深度观察</span>
        </Menu.Item>
        <Menu.Item>
          <span>大公司布局</span>
        </Menu.Item>
      </Menu>
    );
    const extra = (
          <div className="qk_pc_tab_extra">
            <Dropdown overlay={menu} trigger={['hover']} >
                <div className="point">
                  更多类别<Icon type="down" />
                </div>
            </Dropdown>
            <div className="qk_pc_tab_extra_right point">
               <Icon type="search" />搜索
            </div>
            <div className="qk_pc_tab_extra_right">
             {login?<div>已登录</div>:<div onClick={()=>submit()}>未登录</div>}
            </div>
          </div>
    )
    const { selectTab } = this.state
    return (
<Header className="qk_pc_header">
<div className="qk_pc_header_main">
  <img src="assets/logo.png" alt="" className="qk_pc_header_main_img"/>
  <div className="qk_pc_header_content">
    <Tabs defaultActiveKey={selectTab} tabBarExtraContent={extra} onChange={this.changeTab}>
      <TabPane tab="首页" key="index">

      </TabPane>
      <TabPane tab="前沿快讯" key="forward">

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
  </div>
</div>
</Header>

     );
  }

  // getLoginState(login){
  //     if(login){
  //       return(
  //         <div>已登录</div>
  //       )
  //     }else{
  //       return(
  //         <div onClick={()=>this.submit()}>未登录</div>
  //       )
  //     }
  // }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    login: state.app.login
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


export default connect(mapStateToProps,mapDispatchToProps)(withRouter (PCHeader));
