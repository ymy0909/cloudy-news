import React, { Component,Fragment } from 'react';
import './pc_index_forward.less'
import Swiper from 'react-id-swiper';
import { connect } from 'react-redux'


class PCIndexForward extends Component {


  state = {
      swiper:null,
   }
    getSwiperInstance(e){
        this.setState({
            swiper:e
        },()=>{
            const { swiper } = this.state;
            swiper.el.onmouseenter = ()=>{
                console.log(swiper.autoplay)
                swiper.autoplay.stop();
            }
            swiper.el.onmouseleave = ()=>{
                console.log('开始')
                swiper.autoplay.start();
            }
        })
    }

  render() {

      const { forwardList,swiperParams } = this.props

      const swiperItem =  forwardList.map((item,index)=>{
          return(
              <div key={item.id} className="qk_pc_swiper_word_slide" onClick={()=>this.handleSlideClick()}>
                  <div  className="width-100 d-flex">
                      <div className="qk_pc_con_index">{index+1}</div><div className="qk_pc_con_span">{item.title}</div>
                  </div>
              </div>
          )
      })
    return (
        <div>
            <div className="qk_pc_con_nav">
                <div>
                    <span className="qk_pc_con_nav_seq">|</span>
                    <span>前沿快讯</span>
                </div>
                <div className="point">
                    更多>>
                </div>
            </div>
            <div className="qk_pc_con_word_box" >
                {
                    swiperParams?
                        (
                            <Swiper getSwiper={($event)=>this.getSwiperInstance($event)} {...swiperParams} noSwiping={true}>
                                {swiperItem}
                            </Swiper>
                        ):
                        (
                            <Fragment></Fragment>
                        )
                }
            </div>
        </div>
    );
  }
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {
        swiperParams: state.home.swiperParams,
        forwardList: state.home.forwardList,   
    }
}

export default connect(mapStateToProps,null)(PCIndexForward);
