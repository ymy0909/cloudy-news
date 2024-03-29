import React, { Component, Fragment } from 'react'
import { Icon,Menu } from 'antd';
import { connect } from 'react-redux'


class Nav extends Component {
  state = {  }

  render() { 
    const { login } = this.props
    return ( 
       <Fragment>
         {this.userShow(login)}
       </Fragment>
    );
  }
  userShow(login){
    if(login){
      return (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="mail">
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <Icon type="appstore" />
            Navigation Two
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                Navigation Three - Submenu
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      )
    }
  } 

}

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}
 
export default Nav;