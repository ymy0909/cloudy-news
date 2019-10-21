import React, { Component } from 'react'
import { Row,Col,Tabs,TabPane } from 'antd';
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
      swiper:null
  };
  getSwiperInstance = (e)=>{
        this.setState({
            swiper:e
        })
}
  render() {
      const { forwardList } = this.state;
      const params = {
          direction : 'vertical',
          speed:200,
          // loop:true,
          slidesPerView: 10,
          spaceBetween: 0,
          centeredSlides : true,
          // watchSlidesProgress : true,
          autoplay: {
              delay: 0
              // disableOnInteraction: true
          },
          freeMode:true,
          // observer:true,
          // observeParents:true,
          // observeSlideChildren:true,

          // effect: 'flip',
          // grabCursor: true,
          // pagination: {
          //     el: '.swiper-pagination',
          // },
          // navigation: {
          //     nextEl: '.swiper-button-next',
          //     prevEl: '.swiper-button-prev',
          // },
      };

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
              <div className="qk_pc_con_word_box">
                  <Swiper getSwiper={($event)=>this.getSwiperInstance($event)} {...params}>
                      {
                          forwardList.map((item,index)=>{
                              return(
                                  <div key={item.id} className="qk_pc_swiper_word_slide">
                                      <div  className="width-100 d-flex">
                                          <div className="qk_pc_con_index">{index+1}</div><div className="qk_pc_con_span">{item.title}</div>
                                      </div>
                                  </div>
                              )
                          })
                      }
                  </Swiper>
              </div>
          </Col>
        </Row>
     );

  }
  componentDidMount(){
    getForwardList().then(res=>{
      this.setState({
          forwardList:res
      },()=>{
          // this.state.swiper.update()
          // this.state.swiper.autoplay.start()
      })
    })
  }
}

export default PCIndex;
