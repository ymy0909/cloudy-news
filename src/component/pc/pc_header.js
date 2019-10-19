import React, { Component } from 'react';
import { Col,Row,Button } from 'antd';
import './pc_header.scss'
import { connect } from 'react-redux'
import { login} from '../../store/actionCreators'

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
    const { submit,login } = this.props
    return ( 
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a className="logo" href="/">
              <img src="{logo}" alt=""/>
              <span>新闻头条</span>
            </a>
          </Col>
          <Col span={18}>
            <div>
                {this.getLoginState(login)}  
            </div>
            <Button onClick={e=>submit()}>登录</Button>
          </Col>
        </Row>
      </header>
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