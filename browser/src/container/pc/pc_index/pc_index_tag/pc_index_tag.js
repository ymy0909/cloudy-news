import React, { Component } from 'react'
import { Row,Col,Tag } from 'antd';
import { connect } from 'react-redux'
import './pc_index_tag.less'


class PcIndexTag extends Component {
  state = { 
    
  }
  render() { 
    const { tagList } = this.props
    return ( 
      <div>
         <Row className="qk_pc_tag_wrapper" gutter={24}>
           {
             tagList.map(item=>{
               return(
                <Col span={8} className="qk_pc_tag_item" key={item.id}>
                    <Tag color={item.color}>{item.title}</Tag>
                </Col>
               )
             })
           }
        </Row> 
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    tagList: state.home.tagList
  }
}
 
export default connect(mapStateToProps, null)(PcIndexTag)
