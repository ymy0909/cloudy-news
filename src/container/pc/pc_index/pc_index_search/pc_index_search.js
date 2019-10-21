import React, { Component } from 'react';
import { Input } from 'antd';


class PCIndexSearch extends Component {
  
  constructor(props){
    super(props)
  }

  state = {  }
  render() { 
    const {Search} = Input
    const { className } = this.props
    return ( 
        <Search
        placeholder="请输入关键词"
        enterButton="搜索"
        size="default"
        className={className}
        onSearch={value => console.log(value)}
      /> 
    );
  }
}
 
export default PCIndexSearch;