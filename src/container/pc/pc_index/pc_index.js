import React, { Component,Fragment } from 'react'
import {Row, Col, Tabs, TabPane, Button} from 'antd';
import PCIndexSwiper from './pc_index_swiper/pc_index_swiper';
import PCIndexPanel from './pc_index_panel/pc_index_panel';
import PCIndexSearch from './pc_index_search/pc_index_search';
import './pc_index.less'
import { getForwardList } from '../../../api/home';
import Swiper from 'react-id-swiper';

class PCIndex extends Component {
  state = {
     forwardList:[
         // {id:1},{id:2},{id:3}
     ],
      swiper:null,
     swiperParams:null
  };
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
        handleSlideClick(){
                const { swiper } = this.state;
        }
  render() {
      const { forwardList,swiperParams } = this.state;

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
        <Row gutter={24}>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={18}>
                 <PCIndexSwiper/>
              </Col>
              <Col span={6}>
                 <PCIndexPanel/>
              </Col>
            </Row>
            {/* <Tabs defaultActiveKey={selectTab} tabBarExtraContent={extra} onChange={this.changeTab}>
              <TabPane tab="首页" key="index">

              </TabPane>
            </Tabs> */}
          </Col>
          <Col span={8}>
             <PCIndexSearch className="mb-md"/>
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
                  {/*<Button onClick={()=>this.state.swiper.autoplay.stop()}>停止</Button>*/}
          </Col>
        </Row>
     );

  }
  componentDidMount(){
    getForwardList().then(res=>{
      this.setState({
          forwardList:res
      },()=>{
          this.renderSwiper()
          // console.log(this.state.swiper.autoplay.running)
              // this.state.swiper.update()
          // this.state.swiper.autoplay.start()
      })
    })
  }

  renderSwiper(){
         this.setState({
                 swiperParams:{
                         // direction : 'vertical',
                         loop : true,
                         slidesPerView: 9,
                         centeredSlides: true,
                         autoplay:{
                                 delay:0,
                                 disableOnInteraction:false,
                                 stopOnLastSlide: false,
                                 // waitForTransition:false
                         },
                         freeMode:true,
                         speed: 1500,
                         direction : 'vertical',
                         // noSwiping : true,
                         observer:true,//修改swiper自己或子元素时，自动初始化swiper
                         observeParents:true,//修改swiper的父元素时，自动初始化swiper
                 }
         },()=>{


         })
  }
}

export default PCIndex;
