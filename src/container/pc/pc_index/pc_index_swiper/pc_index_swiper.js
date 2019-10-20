import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css'
import './pc_index_swiper.less'

class PCIndexSwiper extends Component {
 
  constructor(){
    super()
    this.state = {
       list:[
         {
           id:1,
           url:'assets/qkljw_pc_baner1.jpg',
         },
         {
          id:2,
          url:'assets/qkljw_pc_baner2.jpg',
         },

       ] 
    }
  }
  
  render() { 
    // const params = {
    //   el: '.swiper-pagination',
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     },
    // }
    const { list } = this.state
    return ( 
      <div>
        <Swiper>
          {
            
            list.map(item=>{
              return(
                <div className="qk_pc_swiper_slide" key={item.id}>
                  <img src={item.url} alt=""/>
                </div>
              )
            })
          }
        </Swiper>
      </div>
     );
  }
  componentDidMount(){

  }
}
 
export default PCIndexSwiper;