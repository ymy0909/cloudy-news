import * as constants from './constants'
import {getForwardList} from '../../api/home'

export const action_getForwardList = (forwardList) => ({
    type:constants.get_forward_list,
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
    },
    forwardList
})

export const actionAsync_getForwardList = ()=> {
    return dispatch => {
      getForwardList().then((res)=>{
        dispatch(action_getForwardList(res))
      })
    }
  }
