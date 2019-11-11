import React, { Component } from 'react'
import { connect } from 'react-redux'
import './pc_index_hot.less'


class PcIndexHot extends Component {
  render() {
    const { hotList } = this.props
    console.log(hotList)
    const hotItem =  hotList.map((item,index)=>{
        return(
          <div key={item.id} className="qk_pc_swiper_word_slide" onClick={()=>this.handleSlideClick()}>
              <div  className="width-100 d-flex">
                  <div className={`qk_pc_con_index ${index < 3?'qk_pc_con_index_start':null}`}>{index+1}</div><div className="qk_pc_con_span">{item.title}</div>
              </div>
          </div>
      )
    })
    // const hotItem = <div>123456</div>
    return ( 
      <div className="qk_pc_con_word_box qk_pc_con_hot_box" >
        {/* {hotItem} */}
        {
          hotItem
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    hotList: state.home.hotList
  }
}

 
export default connect(mapStateToProps, null)(PcIndexHot)
