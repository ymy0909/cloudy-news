import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List,Icon } from 'antd'

// 推荐
class PcIndexRecomment extends Component {
  state = {  }
  render() { 
    const { recommandList } = this.props
    return (  
      <div>
         <List
    itemLayout="vertical"
    size="small"
    dataSource={recommandList}
    renderItem={item => (
      <List.Item
        key={item.id}
        extra={
          <img
            width={120}
            alt="logo"
            src={item.img}
          />
        }
      >
        <List.Item.Meta
          avatar={null}
          title={<a>{item.title}</a>}
          description={<div>{item.time}   <Icon type="eye" />{item.read}阅读</div>}
        />
        {/* {item.content} */}
      </List.Item>
    )}
  />,
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recommandList: state.home.recommandList
  }
}
 
export default connect(mapStateToProps, null)(PcIndexRecomment)