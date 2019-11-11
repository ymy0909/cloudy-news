import * as constants from './constants'

const defaultState = {
    swiperParams:null,
    forwardList:[],
    hotList:[],
    tagList:[
      {id:1,title:'区块链',color:'#76c8fd'},
      {id:2,title:'虚拟币投资',color:'#3C6'},
      {id:3,title:'技术了解',color:'#47c5a2'},
      {id:4,title:'比特币',color:'#b4b9cc'},
      {id:5,title:'应用落地',color:'#ffb85b'},
      {id:6,title:'大佬怎么说',color:'#F30'},
      {id:7,title:'深度观察',color:'#76c8fd'},
      {id:8,title:'政策法规',color:'#3C6'},
      {id:9,title:'大公司布局',color:'#47c5a2'},
    ],
    recommandList:[]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.get_forward_list:
      return {...state, ...{swiperParams: action.swiperParams,forwardList:action.forwardList}}
    case constants.get_hot_list:
      return {...state, ...{hotList:action.hotList}}
    case constants.get_recommand_list:
      console.log(action)
      return {...state, ...{recommandList:action.recommandList}}
    default:
      return state
  }
}
